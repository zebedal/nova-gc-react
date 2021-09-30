import { Fragment, useRef } from "react"
import Spinner from "../../../UI/Spinner"

const qlikObj = [
	{
		id: "QV_vSZmG",
		qlikId: "vSZmG"
	},{
		id: "QV_hwhPsSa",
		qlikId: "hwhPsSa"
	},{
		id: "QV_mhvpYN",
		qlikId: "mhvpYN"
	},{
		id: "QV_upBHAF",
		qlikId: "upBHAF"
	},{
		id: "QV_RjtGph",
		qlikId: "RjtGph"
	},{
		id: "QV_RqsqLcE",
		qlikId: "RqsqLcE"
	}
]

const TrendsContent = props => {

	const box = {
        flex: '1 45%',
        height:'250px'
    }

	qlikObj.forEach((item) => {
		window.appFichaEntidade.getObject(item.id, item.qlikId);
	})

	return (
		<Fragment>
			<div style={{display: 'flex', gap:'20px', position:'relative', flexWrap:'wrap', marginTop:'10px'}}>
				<div style={box} id="QV_vSZmG"></div>
				<div style={box} id="QV_hwhPsSa"></div>
				<div style={box} id="QV_mhvpYN"></div>
				<div style={box} id="QV_upBHAF"></div>
				<div style={{height: '250px', width: '100%'}} id="QV_RjtGph"></div>
				<div style={{height: '250px', width: '100%'}} id="QV_RqsqLcE"></div>
			</div>
		</Fragment>
	)
}

export default TrendsContent
