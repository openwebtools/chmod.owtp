export interface PermissionModel {
    owner: [number, number, number];
    group: [number, number, number];
    all: [number, number, number];
    setuid: boolean;
    setgid: boolean;
    stickybit: boolean;
}