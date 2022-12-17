import { argv, chdir, exit, stdin as input, stdout as output } from "process";
import { homedir } from "os";
import readline from "readline";
import currentDirectory from "./helpers/currentDirectory.js";
import commands from "./helpers/commands.js";

chdir(homedir());

const args = Object.fromEntries(
  argv.slice(2).map((arg) => {
    const [key, value] = arg.split("=");
    return [key, value];
  })
);

const username = args["--username"] ? args["--username"] : "yankees";
console.log(`Welcome to the File Manager, ${username}`);

currentDirectory();

const rl = readline.createInterface({ input, output });

rl.on("line", (line) => {
  commands(line, rl);
})
  .on("error", (error) => {
    console.log(error);
  })
  .on("SIGINT", () => rl.close())
  .on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    process.nextTick(() => exit());
  });
