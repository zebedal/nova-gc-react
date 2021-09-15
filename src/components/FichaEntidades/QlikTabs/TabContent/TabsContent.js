import Card from "../../../UI/Card"
import DetailsContent from "./DetailsContent"
import NotebookContent from "./NotebookContent"
import TrendsContent from "./TrendsContent"

const TabContent = ({activeTab}) => {

	return (
		<Card margin={0} flex={1}>
			{activeTab === 0 ? <TrendsContent /> : null}
			{activeTab === 1 ? <DetailsContent /> : null}
			{activeTab === 2 ? <NotebookContent /> : null}
		</Card>
	)
}

export default TabContent
