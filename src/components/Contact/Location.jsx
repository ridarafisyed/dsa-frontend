/** @format */

import React, { Fragment } from "react";

const Location = () => {
  return (
    <Fragment>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3448.236903537986!2d71.44373319384624!3d30.201785239896125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b3356ac8679b3%3A0x27562b92b6141ada!2sNishter%20Hospital!5e0!3m2!1sen!2s!4v1647860010336!5m2!1sen!2s"
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
