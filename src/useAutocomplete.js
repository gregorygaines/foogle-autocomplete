import {useEffect, useState} from "react";
import {Trie} from "./Trie";
import { suggestionsDatabase } from "./suggestionsDatabase";

// Pretend we connected to our database.
const trie = new Trie(suggestionsDatabase);

const useAutocomplete = (searchQuery) => {
  const [autocompleteResults, setAutocompleteResults] = useState([]);

  // Run whenever the searchQuery changes
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      setAutocompleteResults(trie.getWords(searchQuery));
    } else {
      setAutocompleteResults([]);
    }
  }, [searchQuery]);

  return autocompleteResults;
}

export { useAutocomplete };