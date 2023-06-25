export const generalNameValidation = (...names) => {
  const invalidData = names.filter((credential) => credential.length < 2);
  return invalidData.length > 0 ? false : true;
};
