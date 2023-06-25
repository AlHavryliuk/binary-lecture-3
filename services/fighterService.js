import HttpError from "../helpers/HttpError.js";
import { checkFighterUnicName } from "../helpers/checkFighterUnicName.js";
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
    const { name } = credentials;
    const isUnicName = checkFighterUnicName(name);
    if (!isUnicName) throw HttpError(409, "Conflict! Name is not available");
    const fighter = fighterRepository.create(credentials);
    return fighter;
  }

  getAll() {
    const fighters = fighterRepository.getAll();
    return fighters;
  }

  patch(id, credentials) {
    const { name } = credentials;
    const isUnicName = checkFighterUnicName(name, id);
    if (!isUnicName) throw HttpError(409, "Conflict! Name is not available");
    const fighter = fighterRepository.update(id, credentials);
    return fighter;
  }

  remove(id) {
    const fighter = this.search({ id });
    if (!fighter) throw HttpError(404, "Fighter not found");
    const response = fighterRepository.delete(id);
    return response;
  }
  // TODO: Implement methods to work with fighters
}

const fighterService = new FighterService();

export { fighterService };
