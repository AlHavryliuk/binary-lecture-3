import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { fighterService } from "../services/fighterService.js";

// Controller function to get all fighters

const getAllFighters = (req, res, next) => {
  const fighters = fighterService.getAll();
  req.response = { response: fighters };
  next();
};

// Controller function to get a fighter by ID

const getFighterById = (req, res, next) => {
  const { id } = req.params;
  const fighter = fighterService.search({ id });
  if (!fighter) throw HttpError(404, "Fighter not found");
  req.response = { response: fighter };
  next();
};

// Controller function to create a new fighter

const postFighter = (req, res, next) => {
  const fighter = req.fighter;
  const response = fighterService.create(fighter);
  req.response = { status: 201, response };
  next();
};

// Controller function to update a fighter

const putFighter = (req, res, next) => {
  const newFighterData = req.fighter;
  const { id } = newFighterData;
  const response = fighterService.patch(id, newFighterData);
  req.response = { status: 201, response };
  next();
};

// Controller function to delete a fighter

const deleteFighter = (req, res, next) => {
  const { id } = req.params;
  fighterService.remove(id);
  req.response = { status: 204 };
  next();
};

// Exporting wrapped controller functions

export const getAllFightersCtrl = ctrlWrapper(getAllFighters);
export const getFighterByIdCtrl = ctrlWrapper(getFighterById);
export const postFighterCtrl = ctrlWrapper(postFighter);
export const putFighterCtrl = ctrlWrapper(putFighter);
export const deleteFighterCtrl = ctrlWrapper(deleteFighter);
