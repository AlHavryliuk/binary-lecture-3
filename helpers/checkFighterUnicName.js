import { fighterService } from "../services/fighterService.js";

const checkFighterUnicName = (name) => {
  const allFighters = fighterService.getAll();
  const matches = allFighters.filter(
    ({ name: takenName }) => name.toLowerCase() === takenName.toLowerCase()
  );
  return matches.length > 0 ? false : true;
};

export { checkFighterUnicName };
