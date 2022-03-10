import React from 'react';
import styles from'./button1.module.css';

const Button1 = () => {
  return(
    <>
      <h1 className={styles.title}>css module practice</h1>
      <button className={styles.btn}>button1</button>
    </>
  );
};

export default Button1;