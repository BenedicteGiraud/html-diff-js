import { useState } from 'react';
import style from './Comparator.module.css';
import HTMLEditor from './HTMLEditor';
import { htmlDiff } from '@benedicte/html-diff';

interface ComparatorProps {
  beforeHTML: string;
  afterHTML: string;
}
const Comparator = ({ beforeHTML, afterHTML }: ComparatorProps) => {
  const [before, setBefore] = useState(beforeHTML);
  const [after, setAfter] = useState(afterHTML);
  return (
    <div className={style.container}>
      <div className={style.section}>
        <h2>HTML Before</h2>
        <div className={style.editorContainer}>
          <HTMLEditor
            value={before}
            onChange={(value) => {
              if (value !== undefined) {
                setBefore(value);
              }
            }}
          />
        </div>
      </div>
      <div className={style.section}>
        <h2>HTML After</h2>
        <div className={style.editorContainer}>
          <HTMLEditor
            value={after}
            onChange={(value) => {
              if (value !== undefined) {
                setAfter(value);
              }
            }}
          />
        </div>
      </div>
      <div className={style.section}>
        <h2>HTML Diff</h2>
        <div className={style.editorContainer}>
          <div className={style.diff} dangerouslySetInnerHTML={{ __html: htmlDiff(before, after) }} />
        </div>
      </div>
    </div>
  );
};
export default Comparator;
