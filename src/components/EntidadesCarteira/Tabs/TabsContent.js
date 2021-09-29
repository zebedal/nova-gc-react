import Snapshot from "../Snapshot"
import Card from "../../UI/Card"

const TabsContent = ({ activeTab }) => {

    return (
     <Card>
        {activeTab === 0 ? <Snapshot /> : null}
    </Card>
    )
}



export default TabsContent