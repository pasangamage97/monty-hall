import React from "react";
import './index.css';

function PageLayout({children}) {
  return (
    <div className="App">
      <div className="App-content"> 
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
