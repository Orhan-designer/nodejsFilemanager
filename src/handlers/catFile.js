import { resolve } from "path";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import currentDirectory from "../helpers/currentDirectory.js";
import customOutput from "../helpers/customOutput.js";

const catFile = async (pathToFile) => {
  try {
    const file = resolve(pathToFile);
    const readableStream = createReadStream(file, { encoding: "utf-8" });

    await pipeline(readableStream, customOutput());
    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default catFile;
