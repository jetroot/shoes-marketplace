import React from 'react'

const TitleWithButton = ({title, btnLabel, styles}) => {
  return (
      <div className={`flex justify-between items-center my-6  ${styles}`}>
          <h1 className="font-bold">{title}</h1>
          <button type="button" className="bg-primary px-5 py-2 rounded-full text-white font-semibold">
              {btnLabel}
          </button>
      </div>
  );
}

export default TitleWithButton