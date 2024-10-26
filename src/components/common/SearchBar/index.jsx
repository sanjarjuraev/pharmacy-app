const SearchBar = () => {
  return (
    <div className='w-full max-w-md mx-auto'>
      <input
        type='text'
        placeholder='Search for medicines...'
        className='w-full p-2 border border-gray-300 rounded-md'
      />
    </div>
  );
};

export default SearchBar;
