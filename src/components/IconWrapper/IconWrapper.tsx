import styles from './Icon.module.css'
import { ReactElement } from 'react'

export interface IconPropTypes {
  width?: number;
  height?: number;
  weight?: number;
  color?: string;
}

interface PropTypes {
  children: ReactElement;
}

export default function IconWrapper(props: PropTypes) {
  const { children } = props

  return <div className={styles.Icon}>{children}</div>
}
