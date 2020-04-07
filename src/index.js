import genDimensions from './genDimensions';
import addImage from './addImage';


import React from 'react';
import ReactDOM from 'react-dom';

import styles from './style/index.css';
console.log(genDimensions(3));
console.log(styles);
(addImage);
ReactDOM.render(
    <h1 className={styles.title}>{styles.title}</h1>,
    document.getElementById('root')
);
