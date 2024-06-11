type User = {
  firstName: string;
  middleName?: string | null;
  lastName: string;
  fullName: string;
};

export const createFullName = (
  firstName: string,
  middleName: string | null,
  lastName: string
): string => {
  if (middleName) {
    return `${firstName} ${middleName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
};

export default User;
