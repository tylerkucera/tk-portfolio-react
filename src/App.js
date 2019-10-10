import React from 'react';
import logo from './logo.svg';
import { StyleSheet } from './utils/Styles';

function App() {
  return (
    <div css={styles.appContainer}>
      <header css={styles.header}>
        <img src={logo} alt="logo" css={styles.logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          css={styles.link}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  logo: {
    height: '40vmin',
  },
  link: {
    color: '#09d3ac'
  },
});

export default App;
