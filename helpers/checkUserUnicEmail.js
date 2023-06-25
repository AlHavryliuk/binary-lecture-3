import { userService } from "../services/userService.js";

const checkUserUnicEmail = (email, id = null) => {
  if (!id) return checkWithoutExcluded(email);
  return checkWithExcluded(email, id);
};

const checkWithoutExcluded = (email) => {
  const allUser = userService.getAll();
  const matches = allUser.filter(
    ({ email: takenEmail }) => email.toLowerCase() === takenEmail.toLowerCase()
  );
  return matches.length > 0 ? false : true;
};

const checkWithExcluded = (email, id) => {
  const allUser = userService.getAll();
  const matches = allUser
    .filter(({ id: takenId }) => id !== takenId)
    .filter(
      ({ email: takenEmail }) =>
        email.toLowerCase() === takenEmail.toLowerCase()
    );
  return matches.length > 0 ? false : true;
};

export { checkUserUnicEmail };
