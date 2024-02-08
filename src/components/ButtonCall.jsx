import React from 'react'
import styles from './about.module.css'
import 'bootstrap'

const ButtonCall = (props) => {
  return (
    <a href={props.link} className={styles.btnDonate}>
      {props.title}
    </a>
  )
}

export default ButtonCall;