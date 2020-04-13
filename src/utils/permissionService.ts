import { PermissionModel, PermissionLoggingOptions, PermissionResult } from '../models/permissionModel';



const chmod = 'chmod';
const argumentPrefix = '--';
const delimiter = '-';
const allPerm = 'a+rwx';
const noPerm = 'a-rwx';
/**
 * A service which performs the logic of calculating
 * and converting permissions.
 */
export default class PermissionService {

  /**
   * Returns the permission calculation result.
   * @param value Permission value data.
   */
  public computeResult(value: PermissionModel): PermissionResult {
    return {
      octal: this.computeCommand(value, true),
      symbolic: this.computeCommand(value, false),
      display: this.computeSymbolicDisplay(value)
    };
  }

  /**
   * Returns the full chmod command.
   * @param value Permission value data.
   * @param numeric Whether numeric or symbolic representation.
   */
  private computeCommand(value: PermissionModel, numeric: boolean): string {
    let valueResult: string;

    if (numeric) {
      valueResult = this.computeNumeric(value);
    } else {
      valueResult = this.computeSymbolicCommand(value);
    }

    if(value.fileOptions.referenceFile !== '') {
      valueResult = `${argumentPrefix}reference=${value.fileOptions.referenceFile}`;
    }

    if(value.fileOptions.folderOptions.recursive) {
      if(value.fileOptions.folderOptions.preserveRoot) {
        valueResult = `${argumentPrefix}preserve-root ${valueResult}`;
      }

      valueResult = `-R ${valueResult}`;
    }


    if(value.logging !== PermissionLoggingOptions.Default) {
      valueResult = `${argumentPrefix}${value.logging} ${valueResult}`;
    }

    return `${chmod} ${valueResult}`;
  }

  /**
   * Returns the numeric permission value.
   * @param value Permission value data.
   */
  private computeNumeric(value: PermissionModel): string {
    const owner = this.binaryToNumber(this.arrayToString(value.owner));
    const all = this.binaryToNumber(this.arrayToString(value.all));
    const group = this.binaryToNumber(this.arrayToString(value.group));
    const special = this.computeNumericalSpecialPermissions(value.setuid, value.setgid, value.stickybit);

    let numeric: string;
    if (special === 0) {
      numeric = this.arrayToString([owner, group, all]);
    } else {
      numeric = this.arrayToString([special, owner, group, all])
    }

    // replace the leading 0 value (If special permissions are not set).
    return numeric;
  }

  /**
   * Returns the presentable symbolic permission value.
   * @param value Permission value data.
   */
  private computeSymbolicDisplay(value: PermissionModel): string {
    let owner = this.binaryToSymbolic(value.owner);
    if (value.setuid) {
      owner = owner.replace('x', 's');
    }
    let group = this.binaryToSymbolic(value.group);
    if (value.setgid) {
      group = group.replace('x', 's');
    }
    let all = this.binaryToSymbolic(value.all);
    if (value.stickybit) {
      all = all.replace('x', 't');
    }
    return this.arrayToString([owner, group, all]);
  }

  /**
   * Returns the command symbolic permission value.
   * @param value Permission value data.
   */
  private computeSymbolicCommand(value: PermissionModel): string {
    let owner = this.binaryToSymbolic(value.owner);
    if (value.setuid) {
      owner += 's';
    }
    let group = this.binaryToSymbolic(value.group);
    if (value.setgid) {
      group += 's';
    }
    const all = this.binaryToSymbolic(value.all);

    let result = this.mergeSymbolicCommands(owner, group, all);

    if (value.stickybit) {
      result += ',+t';
    }

    return result;
  }

  /**
   * Converts binary representation to number.
   * @param binary Binary representation as string.
   */
  private binaryToNumber(binary: string): number {
    return parseInt(binary, 2);
  }

  /**
   * Converts an array of any type to a string representation.
   * @param values Values array.
   */
  private arrayToString(values: any[]): string {
    return values.join('');
  }

  /**
   * Converts a binary representation to symbolic permissions.
   * @param binary Binary representation as array
   */
  private binaryToSymbolic(binary: [number, number, number]): string {
    const symbolic = [delimiter, delimiter, delimiter];

    if (binary[0] == 1) {
      symbolic[0] = 'r';
    }

    if (binary[1] == 1) {
      symbolic[1] = 'w';
    }

    if (binary[2] == 1) {
      symbolic[2] = 'x';
    }

    return this.arrayToString(symbolic);
  }

  /**
   * Merge the symbolic represenation to form commands.
   * @param owner Symbolic representation of owner permission
   * @param group Symbolic representation of group permission
   * @param all Symbolic representation of all permission
   */
  private mergeSymbolicCommands(owner: string, group: string, all: string) {
    const combinedString = this.arrayToString([owner, group, all]);
    if (!combinedString.includes(delimiter)) {
      return allPerm;
    } else if (combinedString.match(/-/g).length == combinedString.length) {
      return noPerm;
    } else {
      const result = `${this.computeSymbolicIndividual('u+', owner)},${this.computeSymbolicIndividual('g+', group)},${this.computeSymbolicIndividual('o+', all)}`;

      const resultProcessed = result.replace(/-/g, '').split(',').filter((item) =>{
        return item !== '';
      }).join(',');
      return `${noPerm},${resultProcessed}`;
    }
  }

  private computeSymbolicIndividual(prefix: string, value: string): string {
    const match = value.match(/-/g);
    if(match && match.length === value.length) {
      return ''
    }
    return `${prefix}${value}`;
  }

  /**
   * Compute the special permission numberical value.
   * @param setuid sets the user executable flag.
   * @param setgid sets the group executable flag.
   * @param stickybit sets the sticky bit.
   */
  private computeNumericalSpecialPermissions(setuid: boolean, setgid: boolean, stickybit: boolean): number {
    return this.binaryToNumber(this.arrayToString([Number(setuid), Number(setgid), Number(stickybit)]))
  }
}
