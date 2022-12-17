import { rename } from "fs/promises";
import { parse, resolve } from "path";
import currentDirectory from "../helpers/currentDirectory.js";

const renameFile = async (pathToFile, newFileName) => {
  try {
    const filePath = resolve(pathToFile);
    const { dir } = parse(filePath);
    const pathFromFile = resolve(dir, newFileName);

    await rename(filePath, pathFromFile);

    console.log(`File was renamed to ${newFileName}`);
    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default renameFile;
