import Epic, { TabbarItem } from '../components/Epic/Epic'
import CardIcon from '../components/Icons/CardIcon'
import { observer } from 'mobx-react'
import View from '../components/View/View'

const Main = (props: any) => {
  const { store } = props
  const tabbar: TabbarItem[] = [
    {
      story: 'wallets',
      link: '/wallets',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'categories',
      link: '/categories',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'operations',
      link: '/operations',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'charts',
      link: '/charts',
      icon: <CardIcon width={32} height={32} />,
    },
  ]

  const onStoryChange = (e: TabbarItem): void => {
    store.changeActiveEpic(e.story)
  }

  return (
    <>
      <Epic
        activeStory={store.activeEpic}
        tabbar={tabbar}
        onChangeStory={onStoryChange}
      >
        <View id="wallets">
          <div>wallets</div>
        </View>
        <View id="categories">
          <div>categories</div>
        </View>
        <View id="operations">
          <div>operations</div>
        </View>
        <View id="charts">
          <div>charts</div>
        </View>
      </Epic>
    </>
  )
}

export default observer(Main)
