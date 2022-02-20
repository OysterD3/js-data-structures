class HashTable {
  #items;
  #size;

  constructor(size = 4) {
    this.#items = {};
    this.#size = size;
  }

  /**
   * @param key {any}
   * @return {number}
   */
  #calculateHash(key) {
    return key.toString().length % this.#size;
  }

  /**
   * Add key-value pair to the hash table
   * @param key {any}
   * @param value {any}
   */
  add(key, value) {
    const hash = this.#calculateHash(key);
    if (!this.#items.hasOwnProperty(hash)) {
      this.#items[hash] = {};
    }
    this.#items[hash][key] = value;
  }

  /**
   * Return the search result, null if not found
   * @param key {any}
   * @return {null|any}
   */
  search(key) {
    const hash = this.#calculateHash(key);
    if (this.#items.hasOwnProperty(hash) && this.#items[hash].hasOwnProperty(key)) {
      return this.#items[hash][key];
    } else {
      return null;
    }
  }
}


const ht = new HashTable();
ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");
ht.add("Manila", "500");

console.log(ht.search("Canada"));
