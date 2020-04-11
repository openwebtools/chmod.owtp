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