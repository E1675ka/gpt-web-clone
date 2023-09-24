import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

import "./brand.css";
const Brand = () => {
  return (
    <div className="brand section_padding">
      <div>
        <img src={google} alt="google-logo" />
      </div>
      <div>
        <img src={slack} alt="slack-logo" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian-logo" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox-logo" />
      </div>
      <div>
        <img src={shopify} alt="shopify-logo" />
      </div>
    </div>
  );
};

export default Brand;
