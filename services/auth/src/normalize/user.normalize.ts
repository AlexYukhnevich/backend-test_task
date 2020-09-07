export const normalizeUser = (user) => {
  const { email, app_role, id } = user;
  return { email, app_role, id };
}