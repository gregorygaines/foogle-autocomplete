class TrieNode {
  children
  isEndOfString

  constructor() {
    this.children = new Map();
    this.isEndOfString = false;
  }
}
class Trie {
  rootNode

  constructor(strs) {
    this.rootNode = new TrieNode();

    strs.forEach((str) => {
      this.insert(str);
    });
  }

  contains = (str, returnNode) => {
    // Convert to lower case so we don't have to worry
    // about case differences.
    str = str.toLowerCase();

    // Get the length of the string, so
    // we know how many levels we need
    // to traverse.
    const length = str.length;

    // The crawl node for traversing the trie.
    let crawlNode = this.rootNode;

    for (let level = 0; level < length; ++level) {
      const ch = str.charAt(level);

      if (!crawlNode.children.has(ch)) {
        return false;
      }

      crawlNode = crawlNode.children.get(ch);
    }

    if (returnNode) {
      return crawlNode;
    }

    return crawlNode.isEndOfString;
  }

  insert = (word) => {
    word = word.toLowerCase();

    const length = word.length;

    let crawlNode = this.rootNode;

    for (let level = 0; level < length; level++) {
      const char = word.charAt(level);

      if (!crawlNode.children.has(char)) {
        crawlNode.children.set(char, new TrieNode());
      }

      crawlNode = crawlNode.children.get(char);
    }

    crawlNode.isEndOfString = true;
  }

  // Get all words with prefix
  getWords = (prefix) => {
    // Get root node from prefix
    let prefixRootNode = this.contains(prefix, true);

    // The prefix isn't in the trie.
    if (!prefixRootNode) {
      return [];
    }

    // Hold the results
    let result = [];

    // Call our recursion function from the prefix root.
    this.#_getWordsHelper(prefixRootNode, prefix, result);

    return result.sort();
  }

  // Recur on the children of the current node
  // and add any complete strings to the result
  // array.
  #_getWordsHelper = (root, currString, result) => {
    // Base case: root null
    if (root === null) {
      return;
    }

    // Add word to result if we complete a string
    if (root.isEndOfString) {
      result.push(currString);
    }

    // Loop over each mapping in the children
    for (let [key, value] of root.children) {
      // Append the key char to currString and
      // recur on teh current node.
      this.#_getWordsHelper(value, currString + key, result);
    }
  }
}

export { Trie };