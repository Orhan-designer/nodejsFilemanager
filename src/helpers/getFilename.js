import { fileURLToPath } from "url";

const filename = (importMetaUrl) => {
  return fileURLToPath(importMetaUrl);
};

export default filename;
