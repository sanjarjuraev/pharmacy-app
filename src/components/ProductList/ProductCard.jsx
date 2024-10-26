import React from 'react';

const ProductCard = ({ medicine }) => {
  const {
    brand_name,
    generic_name,
    labeler_name,
    active_ingredients,
    dosage_form,
    packaging,
    route,
  } = medicine;

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200 p-4'>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{brand_name}</div>
        <p className='text-gray-700 text-base'>
          <strong>Generic Name:</strong> {generic_name}
        </p>
        <p className='text-gray-700 text-base'>
          <strong>Labeler:</strong> {labeler_name}
        </p>
        <p className='text-gray-700 text-base'>
          <strong>Dosage Form:</strong> {dosage_form}
        </p>
        <p className='text-gray-700 text-base'>
          <strong>Route:</strong> {route?.join(', ')}
        </p>
        <p className='text-gray-700 text-base mt-2'>
          <strong>Active Ingredients:</strong>
        </p>
        <ul className='list-disc ml-5'>
          {active_ingredients?.lenght &&
            active_ingredients?.map((ingredient, index) => (
              <li key={index}>
                {ingredient.name} - {ingredient.strength}
              </li>
            ))}
        </ul>
      </div>
      <div className='px-6 pt-4 pb-2'>
        {packaging?.length &&
          packaging?.map((pack, index) => (
            <span
              key={index}
              className='inline-block bg-blue-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
            >
              {pack.description}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
