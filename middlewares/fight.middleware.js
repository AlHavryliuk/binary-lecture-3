import HttpError from "../helpers/HttpError.js";
import { fightIsValid } from "../helpers/fightIsValid.js";
import { FIGHT } from "../models/fight.js";

const createFightValid = (req, res, next) => {
  const { fighter1 = null, fighter2 = null, log = null } = req.body;
  const fight = {
    ...FIGHT,
    fighter1,
    fighter2,
    log,
  };

  if (!fightIsValid(fight)) throw HttpError(401, "Not enought information");

  req.fight = fight;

  next();
};

export { createFightValid };
