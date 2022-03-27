/** @format */

import React, { Fragment } from "react";

const Location = () => {
  return (
    <Fragment>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2050.34351075861!2d71.4457662041731!3d30.2013252602022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2dd81ab10c29e483!2sPak%20Italian%20Modern%20Burn%20and%20Plastic%20Surgery%20Centre!5e0!3m2!1sen!2sus!4v1648045523488!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        title="map"
        loading="lazy"
      />
    </Fragment>
  );
};

export default Location;
