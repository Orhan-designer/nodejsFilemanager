import { cpus, userInfo, EOL, homedir } from "os";
import { arch } from "process";
import currentDirectory from "../helpers/currentDirectory.js";

const os = async (params) => {
  if (params.length !== 1) {
    throw new Error("Invalid input");
  }

  try {
    switch (params[0]) {
      case "--EOL":
        console.log(JSON.stringify(EOL));
        break;

      case "--cpus":
        const cpusInfo = cpus().map(({ model, speed }) => ({
          model,
          speed: (speed / 1000).toFixed(2) + "GHZ",
        }));
        console.table(cpusInfo);
        console.log(`CPUS length: ${cpusInfo.length}`);
        break;

      case "--homedir":
        console.log(homedir());
        break;

      case "--username":
        console.log(`Username: ${userInfo().username}`);
        break;

      case "--architecture":
        console.log(`Windows ${arch}`);
        break;

      default:
        throw new Error("Invalid input");
    }

    currentDirectory();
  } catch (error) {
    console.log(error);
  }
};

export default os;
