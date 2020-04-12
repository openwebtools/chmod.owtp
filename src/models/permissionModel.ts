export interface PermissionModel {
    owner: [number, number, number];
    group: [number, number, number];
    all: [number, number, number];
    setuid: boolean;
    setgid: boolean;
    stickybit: boolean;
    fileOptions: PermissionFileOptions;
    logging: PermissionLoggingOptions;
}

export interface PermissionRecursiveModel {
    recursive: boolean;
    preserveRoot: boolean;
}

export interface PermissionFileOptions {
    folderOptions: PermissionRecursiveModel;
    referenceFile: string;
}

export enum PermissionLoggingOptions {
    Verbose = 'verbose',
    Changes = 'changes',
    Silent = 'silent',
    Default = ''
}

export enum PermissionDisplayValues {
    Octal = 'Octal chmod command',
    Symbolic = 'Symbolic chmod command',
    Display = 'Permission listing value'
}

export interface PermissionResult {
    octal: string;
    symbolic: string;
    display: string;
}
