import { createHash } from "crypto";
import { resolve } from "path";
import { pipeline } from "stream/promises";
import { createReadStream } from "fs";
import currentDirectory from "../helpers/currentDirectory.js";
import customOutput from "../helpers/customOutput.js";

const hashFile = async (pathToFile) => {
  try {
    const filePath = resolve(pathToFile);
    const hash = createHash("sha256");
    const readableStream = createReadStream(filePath);

    await pipeline(readableStream, hash.setEncoding("hex"), customOutput());
    currentDirectory();
  } catch (error) {
    console.log(error);
    console.log("Operation failed");
  }
};

export default hashFile;
