import React from 'react';

const FlexComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center">
      <img src="your-image-url" alt="description" className="w-full sm:w-auto" />
      <p className="mt-4 sm:mt-0 sm:ml-4">Your text here</p>
    </div>
  );
};

export default FlexComponent;