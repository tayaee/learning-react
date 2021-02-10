import React from "react";
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
  console.log('styles', styles);
  return <div className={cx('wrapper', 'inverted')}>
    This is <span className='something'>CSSModule</span> demo.
  </div>
};

export default CSSModule;
