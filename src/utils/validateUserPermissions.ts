type User = {
  permissions: string[];
  roles: string[];
};

type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
};

export function validateUserPermissions({ user, permissions, roles }: ValidateUserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => user.permissions.includes(permission));

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAnyRole = roles.some((role) => user.roles.includes(role));

    if (!hasAnyRole) {
      return false;
    }
  }

  return true;
}