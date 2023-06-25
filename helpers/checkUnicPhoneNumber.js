import { userService } from "../services/userService.js";

export const checkUnicPhoneNumber = (number, id) => {
  if (!id) return checkWithoutExcluded(number);
  return checkWithExcluded(number, id);
};

const checkWithoutExcluded = (number) => {
  const allUser = userService.getAll();
  const matches = allUser.filter(
    ({ number: takenNumber }) => number === takenNumber
  );
  return matches.length > 0 ? false : true;
};

const checkWithExcluded = (number, id) => {
  const allUser = userService.getAll();
  const matches = allUser
    .filter(({ id: takenId }) => id !== takenId)
    .filter(({ number: takenNumber }) => number === takenNumber);
  return matches.length > 0 ? false : true;
};
