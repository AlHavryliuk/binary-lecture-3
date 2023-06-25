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
    const user = userRepository.create(credentials);
    return user;
  }

  getAll() {
    const users = userRepository.getAll();
    return users;
  }

  patch(id, credentials) {
    const user = userRepository.update(id, credentials);
    return user;
  }

  remove(id) {
    const response = userRepository.delete(id);
    return response;
  }
}

const userService = new UserService();

export { userService };
