import React from 'react';

const NavBar = ({ handlePrevClick, handleNextClick, isPrevDisabled, isNextDisabled }) => {
  return (
    <div>
      <button onClick={handlePrevClick} disabled={isPrevDisabled}>
        Précédent
      </button>
      <button onClick={handleNextClick} disabled={isNextDisabled}>
        Suivant
      </button>
    </div>
  );
};

export default NavBar;