const CatalogList = ({ onCategoryChange }) => {
  const categories = [
    'ALL',
    'HUMAN OTC DRUG',
    'HUMAN PRESCRIPTION DRUG',
    'OTHERS',
  ];

  return (
    <aside className='w-64 p-4'>
      <h2 className='text-xl font-semibold mb-4'>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className='mb-2'>
            <a
              href={`#${category}`}
              onClick={() => onCategoryChange(category)}
              className='text-blue-500 hover:underline'
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CatalogList;
