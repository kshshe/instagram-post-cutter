import React from "react";
import PropTypes from "prop-types";

import Slide from "./Slide";

const Slides = ({ text, fontSize, background, proportions }) => {
  const textParts = text.split("===");
  return textParts.map((part, index) => (
    <Slide
      key={index}
      text={part}
      index={index}
      totalLength={textParts.length}
      fontSize={fontSize}
      background={background}
      proportions={proportions}
    />
  ));
};

Slides.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  proportions: PropTypes.number.isRequired,
  background: PropTypes.string
};

export default Slides;
