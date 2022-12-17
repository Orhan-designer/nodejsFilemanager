import { dirname } from "path";
import filename from "./getFilename.js";

const directoryName = (importMetaUrl) => {
  return dirname(filename(importMetaUrl));
};

export default directoryName;
