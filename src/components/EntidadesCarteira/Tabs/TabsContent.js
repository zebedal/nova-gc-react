import Card from "../../UI/Card"
import Snapshot from "../Snapshot/Snapshot"
import Trends from "../Trends/Trends"
import Tables from "../Tables/Tables"
import Details from "../Details/Details"

const TabsContent = ({ activeTab }) => {

    return (
     <Card>
        {activeTab === 0 ? <Snapshot /> : null}
        {activeTab === 1 ? <Trends /> : null}
        {activeTab === 2 ? <Tables /> : null}
		{activeTab === 3 ? <Details /> : null}
    </Card>
    )
}



export default TabsContent