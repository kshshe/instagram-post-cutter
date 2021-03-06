import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

const Controls = ({
  onFontSizeChange,
  background,
  handleBackgroundChange,
  setProportions,
  fontColor,
  bgColor,
  onBgColorChange,
  onFontColorChange,
  useTextBg,
  setUseTextBg,
  onTextBgColorChange,
  textBgColor,
}) => {
  const [fontSize, setFontSize] = useState(1);

  const increaseFontSize = useCallback(() => {
    setFontSize((f) => f + 0.1);
  }, []);
  const decreaseFontSize = useCallback(() => {
    setFontSize((f) => Math.max(0.1, f - 0.1));
  }, []);

  useEffect(() => {
    onFontSizeChange(fontSize);
  }, [fontSize, onFontSizeChange]);

  const displayFontSize = fontSize.toFixed(1);

  const increaseProportions = useCallback(() => {
    setProportions((p) => p + 0.1);
  }, [setProportions]);
  const decreaseProportions = useCallback(() => {
    setProportions((p) => Math.max(0.1, p - 0.1));
  }, [setProportions]);
  const resetProportions = useCallback(() => {
    setProportions(1);
  }, [setProportions]);

  return (
    <div className="box">
      <label className="label">Размер шрифта</label>
      <div className="field has-addons">
        <p className="control">
          <button className="button" onClick={decreaseFontSize}>
            -
          </button>
        </p>
        <div className="control">
          <input
            className="input"
            type="text"
            size={displayFontSize.toString().length}
            value={displayFontSize}
            readOnly
          />
        </div>
        <p className="control">
          <button className="button" onClick={increaseFontSize}>
            +
          </button>
        </p>
      </div>
      <label className="label">Плашка под текстом</label>
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={useTextBg}
              onChange={(e) => setUseTextBg(e.target.checked)}
            />{" "}
            Да
          </label>
        </div>
      </div>
      <label className="label">Цвет плашки</label>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="color"
            value={textBgColor}
            onChange={(e) => onTextBgColorChange(e.target.value)}
            placeholder="#000000"
          />
        </div>
      </div>
      <label className="label">Цвет текста</label>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="color"
            value={fontColor}
            onChange={(e) => onFontColorChange(e.target.value)}
            placeholder="#000000"
          />
        </div>
      </div>
      <label className="label">Цвет фона блоков</label>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="color"
            value={bgColor}
            onChange={(e) => onBgColorChange(e.target.value)}
            placeholder="#ffffff"
          />
        </div>
      </div>
      <label className="label">Изображение фона блоков</label>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            value={background}
            onChange={handleBackgroundChange}
            placeholder="Прямая ссылка на изображение"
          />
        </div>
      </div>
      <label className="label">Пропорции</label>
      <div className="field has-addons">
        <div className="control">
          <button className="button" onClick={increaseProportions}>
            Вертикальнее
          </button>
        </div>
        <div className="control">
          <button className="button" onClick={resetProportions}>
            Квадрат
          </button>
        </div>
        <div className="control">
          <button className="button" onClick={decreaseProportions}>
            Горизонтальнее
          </button>
        </div>
      </div>
    </div>
  );
};

Controls.propTypes = {
  onFontSizeChange: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
  handleBackgroundChange: PropTypes.func.isRequired,
  setProportions: PropTypes.func.isRequired,
  fontColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onFontColorChange: PropTypes.func.isRequired,
  onBgColorChange: PropTypes.func.isRequired,
};

export default Controls;
