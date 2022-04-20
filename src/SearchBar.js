import React from "react";

const boldPassedPrefix = (text, prefix) => {
  return <span>{text.slice(0, prefix.length)}<span className="font-bold">{text.slice(prefix.length)}</span></span>
}

const SearchButtons = () => {
  return <div className="flex justify-center mt-4 gap-3 text-sm">
    <button
      className="bg-gray-50 px-4 py-2 rounded-md border border-transparent hover:border-slate-100 hover:shadow">Foogle
      Search
    </button>
    <button
      className="bg-gray-50 px-4 py-2 rounded-md border border-transparent hover:border-slate-100 hover:shadow">I'm
      Feeling Lucky
    </button>
  </div>
}

const MagnifyingGlass = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" className="ml-4 mr-4 h-5 w-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
  </svg>;
}

const SearchBar = (props) => {
  // Check if we have any autocomplete results
  const hasSearchResults = props.autocompleteResults.length > 0;

  return (
    <>
      <div
        className={`border flex items-center h-12 rounded-3xl searchBar mx-auto mt-7 ${hasSearchResults ? "rounded-b-none" : ""}`}>
        <div className="grid place-items-center z-40">
          <MagnifyingGlass/>
        </div>
        <input className="text-sm pr-2 w-10/12 h-4 border-none outline-none" type="text"
               onChange={(e) => {
                 if (props.handleOnChange) {
                   props.handleOnChange(e);
                 }
               }} value={props.searchQuery}/>
      </div>
      {
        !hasSearchResults && <SearchButtons/>
      }
      {
        hasSearchResults &&
        <div className="searchBar mx-auto border border-t-0 rounded-2xl rounded-t-none py-3 shadow-lg">
          <ul>
            {
              props.autocompleteResults.map((autocompleteResult) => {
                return <li className="cursor-pointer flex mb-1 hover:bg-gray-200 py-1">
                  <MagnifyingGlass/> {boldPassedPrefix(autocompleteResult, props.searchQuery)}</li>
              })
            }
          </ul>

          <SearchButtons/>
        </div>
      }
    </>
  )
}

export {SearchBar};