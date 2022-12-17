import { Writable } from "stream";

const customOutput = () => {
  return new Writable({
    decodeStrings: false,
    write(chunk, _, callback) {
      console.log(chunk);
      callback();
    },
  });
};

export default customOutput;
