import HttpError from "../helpers/HttpError.js";
import { fighterIsValid } from "../helpers/fighterIsValid.js";
import { FIGHTER } from "../models/fighter.js";
import { fighterService } from "../services/fighterService.js";

const createFighterValid = (req, res, next) => {
  const { name, health = 100, power, defense } = req.body;
  const fighter = {
    ...FIGHTER,
    name,
    health,
    power,
    defense,
  };

  if (!fighterIsValid(fighter)) throw HttpError(400, "Invalid data");

  req.fighter = fighter;

  // TODO: Implement validatior for FIGHTER entity during creation
  next();
};

const updateFighterValid = (req, res, next) => {
  const { id } = req.params;
  const { name = null, health = 100, power = null, defense = null } = req.body;

  const fighter = fighterService.search({ id });

  if (!fighter) throw HttpError(404, "Fighter not found");

  const updatedFighter = {
    ...fighter,
    name: name ?? fighter.name,
    health: health ?? fighter.health,
    power: power ?? fighter.power,
    defense: defense ?? fighter.defense,
  };

  if (!fighterIsValid(updatedFighter)) throw HttpError(400, "Invalid data");

  req.fighter = updatedFighter;

  // TODO: Implement validatior for FIGHTER entity during update
  next();
};

export { createFighterValid, updateFighterValid };
