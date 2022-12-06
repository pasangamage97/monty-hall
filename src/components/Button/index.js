import React from "react";
import classNames from "classnames";

import "./index.css";

function Button({ children, primary, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={classNames("btn", {
        "btn-active": active,
        "btn-primary": primary,
      })}
    >
      {children}
    </div>
  );
}

export default Button;
