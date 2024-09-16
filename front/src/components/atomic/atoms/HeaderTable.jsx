import React from 'react';

const HeaderTable = ({ name }) => {
  return (
    <div className="border-2 border-red-400 rounded-md mt-4 mx-8 py-2">
      <h2 className="text-center font-semibold">{name}</h2>
    </div>
  )
}

export default HeaderTable;
