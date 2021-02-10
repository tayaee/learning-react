import React from "react";
import styles from './CSSModule.module.css';

const CSSModule = () => {
  console.log('styles', styles);
  return <div className={`${styles.wrapper} ${styles.inverted}`}>
    This is <span className='something'>CSSModule</span> demo.
  </div>
};

export default CSSModule;
