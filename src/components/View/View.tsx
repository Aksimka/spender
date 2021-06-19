import { ReactElement } from 'react'
import styles from './View.module.css'

interface PropTypes {
  id?: string
  children: ReactElement | ReactElement[]
  activePanel?: string
}

const View = (props: PropTypes): ReactElement => {
  const { children, id } = props

  const childsArray = children instanceof Array ? children : [children]

  return (
    <div className={styles.View}>
      {childsArray.map((i, index) => (
        <div key={i.props.id || index}>{i}</div>
      ))}
    </div>
  )
}

export default View
