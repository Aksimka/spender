import Epic, { TabbarItem } from '../components/Epic/Epic'
import CardIcon from '../components/Icons/CardIcon'
import { useState } from 'react'
import View from '../components/View/View'

export default function Main() {
  const tabbar: TabbarItem[] = [
    {
      story: 'index',
      link: '/',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'feed',
      link: '/feed',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'main',
      link: '/',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'test4',
      link: '/test4',
      icon: <CardIcon width={32} height={32} />,
    },
    {
      story: 'test5',
      link: '/test5',
      icon: <CardIcon width={32} height={32} />,
    },
  ]

  let [activeStory, setActiveStory] = useState('feed')

  const onStoryChange = (e: TabbarItem): void => {
    setActiveStory(e.story)
    // e.link && router.push(e.link)
  }

  return (
    <Epic
      activeStory={activeStory}
      tabbar={tabbar}
      onChangeStory={onStoryChange}
    >
      <View>
        <div>qwe</div>
      </View>
      <View>
        <div>qwe</div>
      </View>
      <View>
        <div>qwe</div>
      </View>
    </Epic>
  )
}
