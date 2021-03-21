import { PermissionFileOptions } from "./permissionFileOptions";
import { PermissionLoggingOptions } from "./permissionLoggingOptions";

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
