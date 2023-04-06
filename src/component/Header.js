import React from 'react';
import styles from '../styles/Header.module.css';

const header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <header
      style={headerStyle}
      className={styles.header}
    >
      <h1>Todos</h1>
      <p> Items will be here and in local storage</p>
    </header>
  );
};

export default header;
