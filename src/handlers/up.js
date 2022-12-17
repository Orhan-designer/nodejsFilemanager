import { chdir } from "process";
import currentDirectory from "../helpers/currentDirectory.js";

const up = async () => {
  try {
    chdir("..");

    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default up;
