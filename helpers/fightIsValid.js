
const fightIsValid = (data) => {
  const { fighter1 = null, fighter2 = null, log = null } = data;
  if (!fighter1 || !fighter2 || !log) return false;
  return true;
};

export { fightIsValid };

