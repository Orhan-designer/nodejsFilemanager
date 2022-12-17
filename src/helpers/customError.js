const customErrorHelper = (firstParam, secondParam) => {
  if (!firstParam) {
    throw new Error("File does not exist");
  }

  if (!firstParam || !secondParam) {
    throw new Error("You forgot to write the path to the file or directory in the terminal");
  }
};

export default customErrorHelper;
