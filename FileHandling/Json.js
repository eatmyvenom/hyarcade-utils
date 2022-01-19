const fs = require("fs-extra");

/**
 * 
 * @param {string} path 
 * @returns {object}
 */
async function read (path) {
  return JSON.parse(await fs.readFile(`data/${path}`));
}

/**
 * Write json data to a file
 *
 * @param {string} path path of the target file
 * @param {object} json the json data
 */
async function write (path, json) {

  if(Array.isArray(json)) {
    await fs.writeFile(`data/${path}`, `[${json.map((acc) => JSON.stringify(acc)).join(",")}]`);
  } else {
    await fs.writeFile(`data/${path}`, JSON.stringify(json, null, 4));
  }

}

module.exports = { read, write };