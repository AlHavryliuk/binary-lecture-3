import { fighterService } from "../services/fighterService.js";

const checkFighterUnicName = (name, id = null) => {
  if (!id) return checkWithoutExcluded(name);
  return checkWithExcluded(name, id);
};

const checkWithoutExcluded = (name) => {
  const allFighter = fighterService.getAll();
  const matches = allFighter.filter(
    ({ name: takenName }) => name.toLowerCase() === takenName.toLowerCase()
  );
  return matches.length > 0 ? false : true;
};

const checkWithExcluded = (name, id) => {
  const allFighter = fighterService.getAll();
  const matches = allFighter
    .filter(({ id: takenId }) => id !== takenId)
    .filter(
      ({ name: takenName }) => name.toLowerCase() === takenName.toLowerCase()
    );
  return matches.length > 0 ? false : true;
};

export { checkFighterUnicName };
