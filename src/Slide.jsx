import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const VIRTUAL_WIDTH = 500;
const VIRTUAL_PADDING = VIRTUAL_WIDTH / 20;

const Block = styled.div`
  border: 1px solid #aaa;
  margin-bottom: 10px;
  position: relative;

  width: 100%;
  height: auto;

  &:after {
    content: "";
    display: block;
    padding-bottom: ${({ proportions }) => 100 * proportions}%;
  }

  background-image: url(${({ background }) => background});
  background-position: center center;
  background-size: cover;

  &.slide--no-border {
    border: none;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  flex-grow: 1;
  font-size: ${({ fontSizeModifier }) => fontSizeModifier}em;
  padding: ${({ fontSizeModifier }) => fontSizeModifier * VIRTUAL_PADDING}px;
  margin-bottom: 0 !important;
`;
const Counter = styled.div`
  font-size: 0.8em;
  position: absolute;
  bottom: 1em;
  right: 1em;
`;

const Slide = ({
  text,
  index,
  totalLength,
  fontSize,
  background,
  proportions
}) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const blockRef = useRef();

  useEffect(() => {
    const listener = () => {
      const width = blockRef.current.offsetWidth;
      setCurrentWidth(width);
    };
    window.addEventListener("resize", listener);
    listener();
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [blockRef]);

  return (
    <Block
      ref={blockRef}
      background={background}
      proportions={proportions}
      className="slide"
    >
      <Content>
        <Text
          className="content"
          fontSizeModifier={(fontSize * currentWidth) / VIRTUAL_WIDTH}
        >
          <ReactMarkdown source={text} />
        </Text>
        <Counter>
          {index + 1} / {totalLength}
        </Counter>
      </Content>
    </Block>
  );
};

Slide.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  totalLength: PropTypes.number.isRequired,
  fontSize: PropTypes.number.isRequired,
  proportions: PropTypes.number.isRequired,
  background: PropTypes.string
};

Slide.defaultProps = {};

export default Slide;
