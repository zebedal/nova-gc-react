import styles from './SnapshotCharts.module.css'

const qlikObj = [
    {
		id: "QV_GraphClientesCarteira",
		qlikId: "VYeBte"
	},
    {
		id: "QV_GraphPenFixo",
		qlikId: "PktTwSJ"
	},		
	{
		id: "QV_GraphFidCarteiraComVend",
		qlikId: "rpkq"
	}
]

const SnapshotCharts = props => {

    if(window.appCarteira !== undefined){
        qlikObj.forEach((item) => {
            window.appCarteira.getObject(item.id, item.qlikId);
        })
    }

    return (
        <div className={styles.wrapper}>
            <div id="QV_GraphClientesCarteira"></div>
            <div id="QV_GraphPenFixo"></div>
            <div id="QV_GraphFidCarteiraComVend"></div>

        </div>
    )
}

export default SnapshotCharts