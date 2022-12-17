import { resolve } from "path";
import { unlink } from "fs/promises";
import currentDirectory from "../helpers/currentDirectory.js";

const removeFile = async (pathToFile) => {
  try {
    const filePath = resolve(pathToFile);
    await unlink(filePath);

    console.log(`File ${filePath} was deleted`);

    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default removeFile;
