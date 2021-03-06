import React, { useState, useCallback } from "react";

import Textarea from "./Textarea";
import Slides from "./Slides";
import Controls from "./Controls";
import Hints from "./Hints";
import RenderButton from "./RenderButton";

const useCallbackedState = (initialValue) => {
  const [value, setValue] = useState("");

  const handleValueChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handleValueChange, setValue];
};

function App() {
  const [text, handleTextChange, setText] = useCallbackedState("");
  const [background, handleBackgroundChange] = useCallbackedState("");
  const [proportions, setProportions] = useState(1);

  const [fontSize, setFontSize] = useState(1);
  const [fontColor, setFontColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textBgColor, onTextBgColorChange] = useState("#ffffff");
  const [useTextBg, setUseTextBg] = useState(false);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <Textarea onChange={handleTextChange} value={text} />
            <Hints text={text} setText={setText} />
            <RenderButton />
          </div>
          <div className="column is-two-thirds">
            <Controls
              onFontSizeChange={setFontSize}
              background={background}
              handleBackgroundChange={handleBackgroundChange}
              setProportions={setProportions}
              fontColor={fontColor}
              onFontColorChange={setFontColor}
              bgColor={bgColor}
              onBgColorChange={setBgColor}
              useTextBg={useTextBg}
              setUseTextBg={setUseTextBg}
              textBgColor={textBgColor}
              onTextBgColorChange={onTextBgColorChange}
            />
            <Slides
              text={text}
              fontSize={fontSize}
              background={background}
              proportions={proportions}
              fontColor={fontColor}
              bgColor={bgColor}
              useTextBg={useTextBg}
              textBgColor={textBgColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
