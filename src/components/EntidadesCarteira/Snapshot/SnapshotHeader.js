import styles from './SnapshotHeader.module.css'
import IncreaseArrow from '../../svg/IncreaseArrow'
import DecreaseArrow from '../../svg/DecreaseArrow'
import Fidelizacao from '../../svg/FichaEntidade/ActionButtons/Fidelizacao'
import loadKpis from '../../../qlikConfig/loadKPI'

const qlikObj = [
    {
		id: "QV_FawJp",
		qlikId: "FawJp"
	},
    {
		id: "QV_vkEmj",
		qlikId: "vkEmj"
	},		
	{
		id: "QV_XMAqW",
		qlikId: "XMAqW"
	},
    {
		id: "QV_uVzC",
		qlikId: "uVzC"
	},
    {
		id: "QV_Mckqzt",
		qlikId: "Mckqzt"
	},		
	{
		id: "QV_pcAsnCN",
		qlikId: "pcAsnCN"
	},
    {
		id: "QV_DkRcs",
		qlikId: "DkRcs"
	},		
	{
		id: "QV_XZXQxd",
		qlikId: "XZXQxd"
	}
]

const SnapshotHeader = props => {

    if(window.appCarteira !== undefined){
        console.log(window.appCarteira, qlikObj)
        loadKpis(window.appCarteira, qlikObj)
    }

    function loadKpis(app, kpiObjects){
        kpiObjects.forEach((item) => {
            app.getObjectProperties(item.qlikId).then(function(model){
                var newkpiObject = {
                    "qInitialDataFetch": [{"qHeight": 100, "qWidth": 1}],
                    "qDimensions": [],
                    "qMeasures": [{
                        "qLibraryId": "",
                        "qDef": { "qLabelExpression": "=1",
                                "qDef": model.properties.qHyperCubeDef.qMeasures[0].qDef.qDef
                        }
                    }],
                    "qMode": "S",
                    "qSuppressMissing": false,
                    "qInterColumnSortOrder": [],
                    "qNoOfLeftDims": 1,
                };
    
                app.createCube(newkpiObject, function (reply){
                    if(reply){
                        document.getElementById(item.id).innerHTML = "";
    
                        reply.qHyperCube.qMeasureInfo.forEach(function(qv,o){
                            const _num = reply.qHyperCube.qGrandTotalRow[o].qText;
                            document.getElementById(item.id).innerHTML = _num;
                        })
    
                        window.qlik.resize();
                    };
                });
            });
        })
    }

    return (
        <header className={styles.Header}>
            <div>
                <IncreaseArrow />
                <div>
                    <div className={styles.kpiRow}>
                        <p id="QV_XMAqW" className={styles.kpi} style={{color:'var(--green)'}}></p><p>Entidades facturação {'>'}10%</p>
                    </div>
                    <div className={styles.kpiRow}>
                        <p id="QV_uVzC" className={styles.kpi} style={{color:'#363636'}}></p><p>Entidades facturação {'>'}10% e Med Faturação {'>'}100</p>
                    </div>
                </div>
            </div>
            <div>
                <DecreaseArrow />
                <div>
                    <div className={styles.kpiRow}>
                        <p id="QV_Mckqzt" className={styles.kpi} style={{color:'var(--red)'}}></p><p>Entidades facturação {'<'}10%</p>
                    </div>
                    <div className={styles.kpiRow}>
                        <p id="QV_pcAsnCN" className={styles.kpi} style={{color:'#363636'}}></p><p>Entidades facturação {'<'}10% e Med Faturação {'>'}100</p>
                    </div>
                </div>
            </div>
            <div>
                <Fidelizacao width={40}/>
                <div>
                    <div className={styles.kpiRow}>
                        <p id="QV_FawJp" className={styles.kpi} style={{color:'var(--dark-purple)'}}></p><p>Contratos a expirar ou terminados</p>
                    </div>
                    <div className={styles.kpiRow}>
                        <p id="QV_vkEmj" className={styles.kpi} style={{color:'#363636'}}></p><p>Contratos terminados</p>
                    </div>
                </div>
            </div>
            <div>
                <Fidelizacao width={40}/>
                <div>
                    <div className={styles.kpiRow}>
                        <p id="QV_DkRcs" className={styles.kpi} style={{color:'var(--dark-purple)'}}></p><p>Grupos Económicos</p>
                    </div>
                    <div className={styles.kpiRow}>
                        <p id="QV_XZXQxd" className={styles.kpi} style={{color:'#363636'}}></p><p>Entidades</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SnapshotHeader