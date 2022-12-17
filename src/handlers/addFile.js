import { open } from "fs/promises";
import { resolve } from "path";
import { cwd } from "process";
import currentDirectory from "../helpers/currentDirectory.js";

const addFile = async (newFilename) => {
  let fileHandler;

  try {
    const pathToNewFile = resolve(cwd(), newFilename);
    fileHandler = await open(pathToNewFile, "w");

    console.log(`File ${newFilename} was created`);

    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  } finally {
    fileHandler?.close();
  }
};

export default addFile;
