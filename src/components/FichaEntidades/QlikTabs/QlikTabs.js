import Tabs from './TabButtons/Tabs'
import TabsContent from './TabContent/TabsContent'
import { useState } from 'react'
import Trends from '../../svg/trends'
import Table from '../../svg/tables'
import Details from '../../svg/details'

const QlikTabs = props => {

	const [activeTab, setActiveTab] = useState(0);

	const handleActiveTab = id => {
		setActiveTab(id);
	}

	const tabProperties = [
		{
			tabId: 0,
			tabTitle: 'Trends',
			tabIcon: <Trends />
		},{
			tabId: 1,
			tabTitle: 'Details',
			tabIcon: <Details />
		},{
			tabId: 2,
			tabTitle: 'Notebook',
			tabIcon: <Table />
		}
	]

	return (
		<div>
			<Tabs tabs={tabProperties} activeTab={activeTab} changeTab={handleActiveTab}/>
			<TabsContent activeTab={activeTab}/>
		</div>
	)
}

export default QlikTabs
