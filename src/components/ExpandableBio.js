import { useState } from 'react';
import styles from './ExpandableBio.module.css';

function ExpandableBio({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p className={expanded ? styles.bio : styles.bioClamped}>{text}</p>
      <button
      type="button"
      className={styles.toggle}
      onClick={() => setExpanded(!expanded)}
      aria-expanded={expanded}
    >
      {expanded ? 'Read less' : 'Read more'}
      <span
        className={expanded ? `${styles.caret} ${styles.caretUp}` : styles.caret}
        aria-hidden="true"
      />
    </button>
    </div>
  );
}

export default ExpandableBio;