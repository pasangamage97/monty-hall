import React from "react";
import classNames from "classnames";

import "./index.css";

function Button({ children, active, onClick }) {
  return (
    <div onClick={onClick} className={classNames("btn", { "btn-active": active })}>
      {children}
    </div>
  );
}

export default Button;
