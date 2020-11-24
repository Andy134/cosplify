import React, { Component } from 'react';
import Head from 'next/head'
import App from './App.js'
import styles from '../styles/Homepage.module.css'

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> */}
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" />
        </Head>
        <App/>
      </div>
    )
  }
}

export default Home;

