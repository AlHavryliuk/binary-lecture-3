import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  search(search) {
    const fighter = fighterRepository.getOne(search);
    if (!fighter) {
      return null;
    }
    return fighter;
  }

  create(credentials) {
    const fighter = fighterRepository.create(credentials);
    return fighter;
  }

  getAll() {
    const fighters = fighterRepository.getAll();
    return fighters;
  }

  patch(id, credentials) {
    const fighter = fighterRepository.update(id, credentials);
    return fighter;
  }

  remove(id) {
    const response = fighterRepository.delete(id);
    return response;
  }
  // TODO: Implement methods to work with fighters
}

const fighterService = new FighterService();

export { fighterService };
