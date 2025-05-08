import style from './App.module.css';
import Comparator from './Comparator';
import { afterHTMLLetter, beforeHTMLLetter } from './data';
import githubLogo from './assets/github.svg';

const App = () => {
  return (
    <div className={style.app}>
      <div className={style.header}>
        <h1>HTML Diff Example</h1>
        <a
          className={style.githubButton}
          href="https://github.com/BenedicteGiraud/html-diff-js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub Logo" title="View on GitHub" />
        </a>
      </div>
      <Comparator beforeHTML={beforeHTMLLetter} afterHTML={afterHTMLLetter} />
    </div>
  );
};

export default App;
