// import { rename } from "fs/promises";
import { resolve, parse } from "path";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import currentDirectory from "../helpers/currentDirectory.js";

const moveFile = async (pathToFile, pathToNewDirectory) => {
  try {
    const filePath = resolve(pathToFile);
    const { base } = parse(filePath);

    const newDirectoryPath = resolve(pathToNewDirectory, base);
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(newDirectoryPath);

    await pipeline(readableStream, writableStream);
    await unlink(filePath);

    console.log(`Initial file ${filePath} is deleted and moved to ${newDirectoryPath}`);
    currentDirectory();
  } catch (error) {
    console.log("Operation failed");
  }
};

export default moveFile;
