import { userService } from "../services/userService.js";

const checkUserUnicEmail = (email) => {
  const allUser = userService.getAll();
  const matches = allUser.filter(
    ({ email: takenEmail }) => email.toLowerCase() === takenEmail.toLowerCase()
  );
  return matches.length > 0 ? false : true;
};

export { checkUserUnicEmail };
