import React, { Fragment, useCallback } from "react";
import PropTypes from "prop-types";

const HELP_LINKS = [
  {
    hash: "headers",
    text: "Заголовки"
  },
  {
    hash: "lists",
    text: "Списки"
  },
  {
    hash: "blockquotes",
    text: "Цитаты"
  },
  {
    hash: "horizontal-rule",
    text: "Разделители"
  },
  {
    hash: "emphasis",
    text: "Форматирование"
  }
];

const EXAMPLE_TEXT = `# Пример возможного поста

===

### Заголовки

# Уровень 1
## Уровень 2
### Уровень 3
#### Уровень 4
##### Уровень 5
###### Уровень 6

===

### Списки

* Пункт 1
* Пункт 2
* Пункт 3
* Пункт 4
* Пункт 5

===

### Цитаты

> Изображения, генерируемые сервисом, будут соответствовать виду блоков на странице в момент генерации
`;

const Hints = ({ text, setText }) => {
  const setExampleText = useCallback(() => {
    setText(EXAMPLE_TEXT);
  }, [setText]);

  return (
    <Fragment>
      {!text && (
        <div className="box">
          <button className="button" onClick={setExampleText}>
            Подставить пример
          </button>
        </div>
      )}
      <div className="box">
        <h3>Документация по формату</h3>
        <ul>
          {HELP_LINKS.map(({ hash, text }) => (
            <li key={hash}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#${hash}`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="box">
        Разделитель между изображениями: <code>===</code>
      </div>
    </Fragment>
  );
};

Hints.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired
};

export default Hints;
