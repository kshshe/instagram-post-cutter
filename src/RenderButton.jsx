import React, { useCallback } from "react";

import html2canvas from "html2canvas";

const saveAs = (uri, filename) => {
  var link = document.createElement("a");
  if (typeof link.download === "string") {
    link.href = uri;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
};

const render = async () => {};

const makeScreenshot = (block, index, filenamePrefix) =>
  new Promise(resolve => {
    html2canvas(block, { scale: 5 }).then(canvas => {
      saveAs(canvas.toDataURL(), `${filenamePrefix}${index + 1}.png`);
      resolve();
    });
  });

const RenderButton = () => {
  const handleClick = useCallback(async () => {
    const filenamePrefix = `post-${new Date().getTime()}-`;
    window.scrollTo(0, 0);
    const slides = document.querySelectorAll(".slide");

    for (let index = 0; index < slides.length; index++) {
      const block = slides[index];
      block.classList.add("slide--no-border");
      await render();
      await makeScreenshot(block, index, filenamePrefix);
      block.classList.remove("slide--no-border");
    }
  }, []);

  return (
    <div className="box">
      <button className="button is-primary" onClick={handleClick}>
        Генерировать
      </button>
    </div>
  );
};

export default RenderButton;
