import { ReactElement } from 'react'

interface PropTypes {
  id: string
  children: ReactElement | ReactElement[]
}

const View = (props: PropTypes): ReactElement => {
  const { children, id } = props

  const childsArray = children instanceof Array ? children : [children]

  return (
    <div className="view">
      {childsArray.map((i) => (
        <div className="view-content">{i}</div>
      ))}
    </div>
  )
}

export default View
