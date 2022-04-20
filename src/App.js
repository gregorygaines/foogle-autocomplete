import React, {useState} from "react";
import {useAutocomplete} from "./useAutocomplete";
import {SearchBar} from "./SearchBar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const autocompleteResults = useAutocomplete(searchQuery);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }
  return (
    <main className="flex flex-col">
      <nav className="flex p-6 text-sm w-full font-sans">
        <ul className="flex mr-auto gap-3">
          <li>
            About
          </li>
          <li>
            Store
          </li>
        </ul>

        <ul className="flex ml-auto gap-3">
          <li>
            Gmail
          </li>
          <li>
            Images
          </li>
        </ul>
      </nav>
      <section>
        <h1 className="text-center mt-52 text-8xl font-bold">
          <span className="text-blue-500">F</span>
          <span className="text-red-500">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </h1>
        <SearchBar searchQuery={searchQuery} handleOnChange={(e) => {
          handleSearchInputChange(e);
        }} autocompleteResults={autocompleteResults} />
      </section>
    </main>
  );
};

export default App;
