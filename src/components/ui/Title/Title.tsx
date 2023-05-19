import React from 'react'
import styles from './Title.module.scss'

interface ITitleProps{
    children: React.ReactNode
}

const Title: React.FC<ITitleProps> = ({ children }) => {
  return (
    <h1 className={styles.title}>{ children }</h1>
  )
}

export default Title