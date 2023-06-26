import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { fightersService } from "../services/fightService.js";

const getFightHistory = (req, res, next) => {
  const history = fightersService.getAll();
  req.response = { response: history };
  next();
};

const postFight = (req, res, next) => {
  const fight = req.fight;
  const response = fightersService.create(fight);
  req.response = { status: 201, response };
  next();
};

const getFightById = (req, res, next) => {
  const { id } = req.params;
  const fight = fightersService.search({ id });
  if (!fight) throw HttpError(404, "Not Found");
  req.response = { response: fight };
  next();
};

const removeFight = (req, res, next) => {
  const { id } = req.params;
  fightersService.remove(id);
  req.response = { status: 204 };
  next();
};

export const getFightHistoryCtrl = ctrlWrapper(getFightHistory);
export const postFightCtrl = ctrlWrapper(postFight);
export const getFightByIdCtrl = ctrlWrapper(getFightById);
export const removeFightCtrl = ctrlWrapper(removeFight);
