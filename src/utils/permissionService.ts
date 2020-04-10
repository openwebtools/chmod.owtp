import { PermissionModel } from '../models/permissionModel';

/**
 * A service which performs the logic of calculating
 * and converting permissions.
 */
export default class PermissionService {

  /**
   * Computes the numeric permission value.
   */
  public computeNumeric(value: PermissionModel): string {
    const owner = this.binaryToNumber(this.arrayToString(value.owner));
    const all = this.binaryToNumber(this.arrayToString(value.all));
    const group = this.binaryToNumber(this.arrayToString(value.group));
    return this.arrayToString([owner, group, all]);
  }

  /**
   * Computes the presentable symbolic permission value.
   * @param value Permission binary values.
   */
  public computeSymbolicDisplay(value: PermissionModel): string {
    const owner = this.binaryToSymbolic(value.owner);
    const group = this.binaryToSymbolic(value.group);
    const all = this.binaryToSymbolic(value.all);
    return this.arrayToString([owner, group, all]);
  }

    /**
   * Computes the command symbolic permission value.
   * @param value Permission binary values.
   */
  public computeSymbolicCommand(value: PermissionModel): string {
    const owner = this.binaryToSymbolic(value.owner);
    const group = this.binaryToSymbolic(value.group);
    const all = this.binaryToSymbolic(value.all);
    return this.mergeSymbolicCommands(owner, group, all);
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
    const symbolic = ['-', '-', '-'];

    if(binary[0] == 1) {
      symbolic[0] = 'r';
    }

    if(binary[1] == 1) {
      symbolic[1] = 'w';
    }

    if(binary[2] == 1) {
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
    if(!combinedString.includes('-')) {
      return 'a+rwx';
    } else if(combinedString.match(/-/).length == combinedString.length) {
      return 'a-rwx';
    } else {
      return `u=${owner},g=${group},a=${all}`;
    }
  }
}
