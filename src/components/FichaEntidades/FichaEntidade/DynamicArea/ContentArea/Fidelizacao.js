
import styles from './Fidelizacao.module.css'

const qlikObj = [
    {
		id: "QV_bjmvq",
		qlikId: "bjmvq"
	},{
		id: "QV_WQJNEqu",
		qlikId: "WQJNEqu"
	},{
		id: "QV_BpqwuM",
		qlikId: "BpqwuM"
	},{
		id: "QV_jzQjb",
		qlikId: "jzQjb"
	}
]

const Fidelizacao = props => {

    if(window.appFichaEntidade !== undefined){
        loadKpis(window.appFichaEntidade, qlikObj)
    }

    function loadKpis(app, kpiObjects){    
        kpiObjects.forEach((item) => {
            kpiCube(item, app);
        })
    }
    
    function kpiCube(item, app){
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
    }

    return (
        <div className={styles.grid}>
            <span className={styles.gridTitles}>VM</span>
            <span className={styles.gridTitles}>DM</span>
            <span className={styles.gridTitles}>Fixo</span>
            <span className={styles.gridTitles}>IOT</span>
            <span className={styles.gridValues} id="QV_bjmvq">XXX</span>
            <span className={styles.gridValues} id="QV_WQJNEqu">--</span>
            <span className={styles.gridValues} id="QV_BpqwuM">XXX&nbsp;</span>
            <span className={styles.gridValues} id="QV_jzQjb">XX%</span>
        </div>
    )
}

export default Fidelizacao