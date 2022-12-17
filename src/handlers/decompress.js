import { resolve, parse } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createBrotliDecompress } from "zlib";
import currentDirectory from "../helpers/currentDirectory.js";

const decompressFile = async (pathToFile, pathToDestination) => {
  try {
    const filePath = resolve(pathToFile);
    const { name, ext } = parse(filePath);

    if (!ext.includes(".br")) {
      throw new Error("Invalid file extension");
    }

    const destinationPath = resolve(pathToDestination, name);
    const readableStream = createReadStream(filePath);
    const writableStream = createWriteStream(destinationPath);
    const brotliDecompress = createBrotliDecompress();

    await pipeline(readableStream, brotliDecompress, writableStream);
    currentDirectory();
  } catch (error) {
    console.log(error);
    console.log("Operation failed");
  }
};

export default decompressFile;
