export const ADMIN_EMAIL =
  "admin@insidehost.com";

export const ADMIN_PASSWORD =
  "insidehost123";

export function validateAdmin(
  email: string,
  password: string
) {
  return (
    email === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  );
}