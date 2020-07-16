import React from 'react';

const ThemeToggle = () => {
  return ( 
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
 
export default ThemeToggle;