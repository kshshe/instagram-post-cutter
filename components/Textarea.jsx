import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ onChange, value }) => {
  return (
    <div className="field">
      <textarea
        className="textarea is-fullwidth"
        rows="15"
        placeholder="Введите текст поста"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Textarea.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Textarea;
