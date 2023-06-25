import HttpError from "../helpers/HttpError.js";
import { checkUnicPhoneNumber } from "../helpers/checkUnicPhoneNumber.js";
import { checkUserUnicEmail } from "../helpers/checkUserUnicEmail.js";
import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  create(credentials) {
    const { phoneNumber, email } = credentials;
    const unicEmail = checkUserUnicEmail(email); // with register ignore
    if (!unicEmail) throw HttpError(409, "Conflict! Email is not available");
    const unicPhoneNumber = checkUnicPhoneNumber(phoneNumber);
    if (!unicPhoneNumber)
      throw HttpError(409, "Conflict! Phone number is not available");
    const user = userRepository.create(credentials);
    return user;
  }

  getAll() {
    const users = userRepository.getAll();
    return users;
  }

  patch(id, credentials) {
    const { phoneNumber, email } = credentials;
    const unicEmail = checkUserUnicEmail(email, id); // with register ignore
    if (!unicEmail) throw HttpError(409, "Conflict! Email is not available");
    const unicPhoneNumber = checkUnicPhoneNumber(phoneNumber, id);
    if (!unicPhoneNumber)
      throw HttpError(409, "Conflict! Phone number is not available");
    const user = userRepository.update(id, credentials);
    return user;
  }

  remove(id) {
    const user = userService.search({ id });
    if (!user) throw HttpError(404, "User not found");
    const response = userRepository.delete(id);
    return response;
  }
}

const userService = new UserService();

export { userService };
