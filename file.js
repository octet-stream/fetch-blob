import Blob from './index.js';

export default class File extends Blob {
  #lastModified = 0;
  #name = '';

  /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */ // @ts-ignore
  constructor(fileBits, fileName, options = {}) {
    if (arguments.length < 2) {
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    }
    super(fileBits, options);

    const modified = Number(options.lastModified);
    this.#lastModified = Number.isNaN(modified) ? modified : Date.now()
    this.#name = fileName;
  }

  get name() {
    return this.#name;
  }

  get lastModified() {
    return this.#lastModified;
  }

  get [Symbol.toStringTag]() {
    return "File";
  }
}

export { File };
