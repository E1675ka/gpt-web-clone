import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

import "./brand.css";
const Brand = () => {
  return (
    <div className="brand section_padding">
      <div>
        <img src={google} />
      </div>
      <div>
        <img src={slack} />
      </div>
      <div>
        <img src={atlassian} />
      </div>
      <div>
        <img src={dropbox} />
      </div>
      <div>
        <img src={shopify} />
      </div>
    </div>
  );
};

export default Brand;
