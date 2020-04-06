import genDimensions from './genDimensions';
import addImage from './addImage';
(addImage);

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style/index.css';
console.log(genDimensions(3));
console.log(styles);
ReactDOM.render(
    <h1 class={styles.title}>{styles.title}</h1>,
    document.getElementById('root')
);
