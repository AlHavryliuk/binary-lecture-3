import { generalNameValidation } from "./generalValidationFunc.js";

export const fighterIsValid = (fighter) => {
  if (!checkIsEmptyField(fighter)) return false;
  const { health, power, defense, name } = fighter;
  if (!generalNameValidation(name)) return false;
  if (!healthValidation(health)) return false;
  if (!powerValidation(power)) return false;
  if (!defenseValidation(defense)) return false;
  return true;
};

const checkIsEmptyField = (fighter) => {
  if (!fighter.name || !fighter.health || !fighter.power || !fighter.defense) {
    return false;
  }
  return true;
};

const healthValidation = (health) => {
  if (typeof health === "number" && health >= 80 && health <= 120) return true;
  return false;
};

const powerValidation = (power) => {
  if (typeof power === "number" && power >= 1 && power <= 100) return true;
  return false;
};

const defenseValidation = (defense) => {
  if (typeof defense === "number" && defense >= 1 && defense <= 10) return true;
  return false;
};
