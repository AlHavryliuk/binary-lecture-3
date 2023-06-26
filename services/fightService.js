import { fightRepository } from "../repositories/fightRepository.js";
import { fighterRepository } from "../repositories/fighterRepository.js";

class FightersService {
  search(search) {
    const fight = fightRepository.getOne(search);
    if (!fight) {
      return null;
    }

    return fight;
  }

  getAll() {
    const history = fightRepository.getAll();
    return history;
  }

  create(data) {
    const fight = fightRepository.create(data);
    return fight;
  }

  remove(id) {
    const fight = fightersService.search({ id });
    if (!fight) throw HttpError(404, "Fight not found");
    const response = fighterRepository.delete(id);
    return response;
  }

  // OPTIONAL TODO: Implement methods to work with fights
}

const fightersService = new FightersService();

export { fightersService };
