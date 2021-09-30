import { useEffect } from "react";
import TabList from "../components/UI/Tabs/TabList"

const Gerir = props => {

    useEffect(() => {
        document.getElementById("CurrentSelections").style.display = "none";
    }, []);

    return (
        <div>
            <TabList />
        </div>
    )
}

export default Gerir