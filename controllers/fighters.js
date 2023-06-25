import HttpError from "../helpers/HttpError.js";
import { checkFighterUnicName } from "../helpers/checkFighterUnicName.js";
import ctrlWrapper from "../helpers/ctrlWrapper.js";
import { fighterService } from "../services/fighterService.js";

// Controller function to get all fighters

const getAllFighters = (req, res, next) => {
  const fighters = fighterService.getAll();
  res.json({ fighters });
};

// Controller function to get a fighter by ID

const getFighterById = (req, res) => {
  const { id } = req.params;
  const fighter = fighterService.search({ id });
  if (!fighter) throw HttpError(404, "Fighter not found");
  res.json({ fighter });
};

// Controller function to create a new fighter

const postFighter = (req, res) => {
  const fighter = req.fighter;
  const { name } = fighter;
  const isUnicName = checkFighterUnicName(name);
  if (!isUnicName) throw HttpError(409, "Conflict! Name is not available");
  const response = fighterService.create(fighter);
  res.status(201).json(response);
};

// Controller function to update a fighter

const putFighter = (req, res) => {
  const newFighterData = req.fighter;
  const { id } = newFighterData;
  const response = fighterService.patch(id, newFighterData);
  res.status(201).json(response);
};

// Controller function to delete a fighter

const deleteFighter = (req, res) => {
  const { id } = req.params;
  const fighter = fighterService.search({ id });
  if (!fighter) throw HttpError(404, "Fighter not found");
  fighterService.remove(id);
  res
    .status(204)
    .json({ message: "No Content! Fighter has been deleted successfully" });
};

// Exporting wrapped controller functions

export const getAllFightersCtrl = ctrlWrapper(getAllFighters);
export const getFighterByIdCtrl = ctrlWrapper(getFighterById);
export const postFighterCtrl = ctrlWrapper(postFighter);
export const putFighterCtrl = ctrlWrapper(putFighter);
export const deleteFighterCtrl = ctrlWrapper(deleteFighter);
