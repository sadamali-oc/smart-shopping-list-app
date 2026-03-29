import React from "react";

function Brand({name, href="#"}) {
  return (
    <a className="navbar-brand" href={href}>
      {name}
    </a>
  );
}

export default Brand;
 


