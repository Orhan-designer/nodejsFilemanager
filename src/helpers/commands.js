import cd from "../handlers/cd.js";
import ls from "../handlers/ls.js";
import up from "../handlers/up.js";
import os from "../handlers/os.js";
import cat from "../handlers/catFile.js";
import add from "../handlers/addFile.js";
import rn from "../handlers/renameFile.js";
import cp from "../handlers/copyFile.js";
import mv from "../handlers/moveFile.js";
import rm from "../handlers/removeFile.js";
import hash from "../handlers/hashFile.js";
import compress from "../handlers/compress.js";
import decompress from "../handlers/decompress.js";

const commands = async (line, rl) => {
  let arr = line.split(" ");
  const command = arr[0];

  if (line.trim() === ".exit") {
    rl.close();
    return;
  }

  try {
    switch (command) {
      case "up":
        await up();
        break;

      case "cd":
        await cd(arr[1]);
        break;

      case "ls":
        await ls();
        break;

      case "os":
        await os(arr.splice(1));
        break;

      case "cat":
        await cat(arr[1]);
        break;

      case "add":
        await add(arr[1]);
        break;

      case "rn":
        await rn(arr[1], arr[2]);
        break;

      case "cp":
        await cp(arr[1], arr[2]);
        break;

      case "mv":
        await mv(arr[1], arr[2]);
        break;

      case "rm":
        await rm(arr[1]);
        break;

      case "hash":
        await hash(arr[1]);
        break;

      case "compress":
        await compress(arr[1], arr[2]);
        break;

      case "decompress":
        await decompress(arr[1], arr[2]);
        break;

      default:
        throw new Error("Invalid input");
    }
  } catch (error) {
    console.log(error);
  }
};

export default commands;
