import styles  from './Servicos.module.css'

const qlikObj = [
    {
        id: "QV_kjZtTd",
        qlikId: "kjZtTd"
    },{
        id: "QV_cfgyJX",
        qlikId: "cfgyJX"
    },{
        id: "QV_LJynxnn",
        qlikId: "LJynxnn"
    },{
        id: "QV_dYujTJ",
        qlikId: "dYujTJ"
    }
]

const Servicos = props => {

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
            <span>
                <span className={styles.gridValues} id="QV_kjZtTd">XXX&nbsp;</span>
                <svg width="14" height="12" viewBox="0 0 14 12">
                    <path d="M7,0l7,12H0Z" fill={'var(--red)'} />
                </svg>
            </span>
            <span className={styles.gridValues} id="QV_cfgyJX">--</span>
            <span>
                <span className={styles.gridValues} id="QV_LJynxnn">XXX&nbsp;</span>
                <svg width="14" height="12" viewBox="0 0 14 12">
                    <path d="M7,0l7,12H0Z" fill={'var(--green)'} />
                </svg>
            </span>
            <span className={styles.gridValues} id="QV_dYujTJ">XX%</span>

        </div>
    )
}

export default Servicos