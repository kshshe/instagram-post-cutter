import React from "react";
import PropTypes from "prop-types";

import Slide from "./Slide";

const Slides = ({ text, ...styles }) => {
  const textParts = text.split("===");
  return textParts.map((part, index) => (
    <Slide
      key={index}
      text={part}
      index={index}
      totalLength={textParts.length}
      {...styles}
    />
  ));
};

Slides.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  proportions: PropTypes.number.isRequired,
  background: PropTypes.string,
  fontColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default Slides;
