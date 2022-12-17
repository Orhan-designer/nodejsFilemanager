import { cwd } from "process";

const currentDirectory = () => {
  console.log(`You are currently in ${cwd()}`);
};

export default currentDirectory;
