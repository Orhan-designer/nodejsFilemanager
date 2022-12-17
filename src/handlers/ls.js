import { readdir } from "fs/promises";
import { cwd } from "process";
import { resolve } from "path";
import currentDirectory from "../helpers/currentDirectory.js";

const ls = async () => {
  try {
    const curDirectory = resolve(cwd());

    const files = (await readdir(curDirectory, { withFileTypes: true })).map((el) => {
      return {
        name: el.name,
        type: el.isDirectory() ? "directory" : "file",
      };
    });

    console.table(files);

    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default ls;
