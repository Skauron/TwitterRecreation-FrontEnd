import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found:/</h1>
      <h3>Try this link:</h3>
      <Link to="/"> Home Page</Link>
    </div>
  );
}

export default PageNotFound;
