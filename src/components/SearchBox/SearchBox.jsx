const SearchBox = ({input, handleInputChange}) => {
    console.log(input);
  return (
      <>
        <p>Find contacts by name</p>
        <input type="text"
      value={input}
      onChange={handleInputChange} />
      </>
    );
  };
  
  export default SearchBox;
  