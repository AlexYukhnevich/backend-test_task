export const normalizeUser = (user) => {
  const { email, first_name, last_name, date_of_birth, id } = user;
  return { id, email, firstName: first_name, last_name, date_of_birth };
}