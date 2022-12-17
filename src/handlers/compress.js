import { resolve, parse } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createBrotliCompress } from "zlib";
import currentDirectory from "../helpers/currentDirectory.js";
import customErrorHelper from "../helpers/customError.js";

const compressFile = async (pathToFile, pathToDestination) => {
  try {
    customErrorHelper(pathToFile, pathToDestination);

    const filePath = resolve(pathToFile);
    const { base } = parse(filePath);
    const fileName = `${base}.br`;
    const destinationPath = resolve(pathToDestination, fileName);

    const readableStream = createReadStream(base);
    const writableStream = createWriteStream(destinationPath);
    const brotliCompress = createBrotliCompress();

    await pipeline(readableStream, brotliCompress, writableStream);
    currentDirectory();
  } catch (error) {
    console.log(error); 
    
    console.log("Operation failed");
  }
};

export default compressFile;
