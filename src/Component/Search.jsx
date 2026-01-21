import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Search = ({ filter }) => {
  const [input, setInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestion, setsuggestion] = useState([]);
  const Item = ["shirt", "jeans", "watch", "shoes", "t-shirt"];

  const inputFun = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const array = Item.filter(product =>
      product.toLowerCase().startsWith(input.toLowerCase())
    );
    setsuggestion(array);
    filter(input);
  }, [input]);

  return (
    <div className='flex gap-2 '>
<div className='flex flex-col relative'>
  {/* Input wrapper */}
  <div className="relative">
    <input
      type="text"
      onChange={inputFun}
      value={input}
      onClick={() => setShowSuggestion(!showSuggestion)}
      className='bg-white h-10 w-full text-black text-xs p-2 pr-8 font-bold rounded-md'
      placeholder='Search Item'
    />

    {/* ❌ Clear icon */}
    {input && (
      <span
        onClick={() => {
          setInput("");
          setShowSuggestion(false);
          filter("");
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-black text-lg"
      >
        ❌
      </span>
    )}
  </div>

  {/* Suggestions dropdown */}
  {showSuggestion && (
    <div className='absolute top-full left-0 w-full md:w-64 max-w-[90vw] overflow-hidden shadow-lg shadow-blue-500/50 bg-white text-black rounded-2xl p-3 text-sm z-10'>

      {input ? (
        <span className='font-bold text-xl'>Item Found</span>
      ) : (
        <span className='font-bold text-xl'>Search</span>
      )}

      <div className='flex flex-col'>
        {suggestion.length > 0 ? (
          suggestion.map((item, index) => (
            <div key={index}>
              <hr />
              <span
                className="text-xl cursor-pointer"
                onClick={() => {
                  setShowSuggestion(false);
                  setInput(item);
                  filter(item);
                }}
              >
                {item}
              </span>
            </div>
          ))
        ) : (
          <span>No item Found</span>
        )}
      </div>
    </div>
  )}
</div>


      {/* Search button */}
      <div>
        <Button variant="outline-success" onClick={() => setShowSuggestion(false)}>
          <span className='text-xl font-bold'>Search</span>
        </Button>
      </div>
    </div>
  );
};

export default Search;
