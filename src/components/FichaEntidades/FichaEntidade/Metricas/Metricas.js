import styles from './Metricas.module.css'
import { motion } from 'framer-motion'

const variants = {
    start: {
        y: 50,
        opacity:0
    },
    end: {
        y: 0,
        opacity:1,
        transition: {
            delay:0.5,
            duration: 0.5
        }
    }
}

const qlikObj = [
    {
        id: "QV_PbvUTTN",
        qlikId: "PbvUTTN"
    },{
        id: "QV_kvBsrC",
        qlikId: "kvBsrC"
    },{
        id: "QV_RtmuJJK",
        qlikId: "RtmuJJK"
    },{
        id: "QV_HrdrBjG",
        qlikId: "HrdrBjG"
    }
]


const Metricas = props => {

    loadKpis(window.appFichaEntidade, qlikObj)

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
        <motion.div className={styles.flexWrapper} variants={variants} initial="start" animate="end">

            <div className={styles.box}>
                <p className={styles.title}>Qualificado</p>
                <p className={styles.value}id="QV_PbvUTTN">xx%</p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>Fidelizado</p>
                <p className={styles.value}>xx%</p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>Act. Siebel</p>
                <p className={styles.value} id="QV_kvBsrC">10</p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>Ped. Contacto</p>
                <p className={styles.value} id="QV_RtmuJJK">100</p>
            </div>

            <div className={styles.box}>
                <p className={styles.title}>Reclamações</p>
                <p className={styles.value} id="QV_HrdrBjG">2</p>
            </div>

        </motion.div>
    )
}

export default Metricas