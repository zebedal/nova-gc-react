import { useState } from 'react'
import { Fragment } from 'react'
import TabsHeader from './TabHeader'
import TabsContent from './TabsContent'
import Camera from '../../svg/camera'
import Table from '../../svg/tables'
import Details from '../../svg/details'

const tabsHeader = [
    {
        tabId: 0,
        tabTitle: 'Snapshot',
        tabIcon: <Camera />
    },
    {
        tabId: 1,
        tabTitle: 'Tables',
        tabIcon: <Table />
    },
    {
        tabId: 2,
        tabTitle: 'Details',
        tabIcon: <Details />
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
            <TabsContent activeTab={activeTab} />
        </Fragment>
    )
}



export default TabList