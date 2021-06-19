import { ReactElement } from 'react'
import styles from './Epic.module.css'
import classNames from 'classnames'

export interface TabbarItem {
  story: string
  link?: string
  icon: any
}

export interface TabbarClickPayload {
  story: TabbarItem
}

interface PropTypes {
  children: ReactElement | ReactElement[]
  activeStory: string
  tabbar: TabbarItem[]
  onChangeStory: Function
}

const Epic = (props: PropTypes): ReactElement => {
  const { children, activeStory, tabbar, onChangeStory } = props

  const handleTabbarClick = (tabbarItem: TabbarItem): void => {
    onChangeStory(tabbarItem)
  }

  const childsArray = children instanceof Array ? children : [children]

  return (
    <div className={styles.Epic}>
      <div className={styles.EpicContent}>
        {childsArray.find((i) => i.props.id === activeStory)}
      </div>
      <div className={styles.Tabbar}>
        {tabbar && tabbar.length
          ? tabbar.map((i) => {
              return (
                <div
                  className={classNames(
                    styles.TabbarItem,
                    { [styles.ActiveTabbarItem]: activeStory === i.story },
                    styles.TabbarItemIcon
                  )}
                  onClick={(e) => handleTabbarClick(i)}
                  key={i.story}
                >
                  {i.icon}
                </div>
              )
            })
          : 'no tabbar'}
      </div>
    </div>
  )
}

export default Epic
