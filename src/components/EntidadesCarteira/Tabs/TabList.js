import { useState, Fragment } from 'react'
import TabsHeader from './TabHeader'
import TabsContent from './TabsContent'
import Camera from '../../svg/camera'
import Trends from '../../svg/trends'


const tabsHeader = [
    {
        tabId: 0,
        tabTitle: 'Snapshot',
        tabIcon: <Camera />
    },
    {
        tabId: 1,
        tabTitle: 'Trends',
        tabIcon: <Trends />
    }
]


const TabList = props => {

    const [activeTab, setActiveTab] = useState(0)

    const toggleActiveTab = (tabId) => {
        setActiveTab(tabId)
    }

    return (
        <Fragment>
            <TabsHeader toggleActive={toggleActiveTab} items={tabsHeader} activeTab={activeTab} />
            <TabsContent activeTab={activeTab}/>
        </Fragment>
    )
}



export default TabList