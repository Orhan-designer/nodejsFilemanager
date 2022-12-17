import { chdir } from "process";
import currentDirectory from "../helpers/currentDirectory.js";

const cd = async (directoryPath) => {
  try {
    directoryPath.length === 2 && directoryPath.slice(-1) === ":" ? chdir(directoryPath + "/") : chdir(directoryPath);

    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default cd;
