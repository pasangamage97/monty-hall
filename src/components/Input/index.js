import classNames from "classnames";

import "./index.css";

function Input({ value, onChange }) {
  return (
    <input className='text-input' value={value} onChange={onChange}/>
  );
}

export default Input;
