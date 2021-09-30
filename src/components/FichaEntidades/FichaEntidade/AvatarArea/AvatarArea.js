import Avatar from '../../../svg/FichaEntidade/Avatar'
import styles from './AvatarArea.module.css'
import Badges from './Badges'
import Star from '../../../svg/FichaEntidade/Star'
import Smart from '../../../svg/FichaEntidade/Smart'
import Shield from '../../../svg/FichaEntidade/Shield'
import Cloud from '../../../svg/FichaEntidade/Cloud'
import { motion } from 'framer-motion'



const variants = {
    start: {
        scaleX: 0
    },
    end: {
      scaleX: 1,
      originX:0,
        transition: {
            delay:0.5,
           duration:0.5
        }
    }
  }

  const qlikObj = [
        {
            id: "QV_BHde",
            qlikId: "BHde"
        },{
            id: "QV_ESmfJUE",
            qlikId: "ESmfJUE"
        },{
            id: "QV_QtjkL",
            qlikId: "QtjkL"
        },{
            id: "QV_JwfdEX",
            qlikId: "JwfdEX"
        },{
            id: "QV_xgdQXGD",
            qlikId: "xgdQXGD"
        },{
            id: "QV_LKckSc",
            qlikId: "LKckSc"
        }
  ]

const AvatarArea = props => {

    const badgesObj = [
        {
            id: 1,
            visible: true,
            component: <Star />,
            title: "Antiguidade do cliente"
        },
        {
            id: 2,
            visible: true,
            component: <Smart />,
            title: "Smart solutions"
        },
        {
            id: 3,
            visible: true,
            component: <Shield />,
            title: "Segurança"
        },
        {
            id: 4,
            visible: true,
            component: <Cloud />,
            title: "Cloud solutions"
        },

    ]

    const filteredArr = badgesObj.filter(el => el.visible === true)

    /* qlikObj.forEach((item) => {
		window.appFichaEntidade.getObject(item.id, item.qlikId);
	}) */

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
        <div className={styles.wrapper}>
            <Avatar />
            <motion.div variants={variants} initial="start" animate="end">
                <p className={styles.nomeEntidade} id="QV_ESmfJUE">Zé das Couves, Lda. - 500527417</p>
                <Badges badges={filteredArr} />
                <p className={styles.nomeGrupo} id="QV_BHde">Nome do Grupo - 500258741</p>
                <p className={styles.light} >Nº Colab.<span className={styles.strong} id="QV_QtjkL"> 45</span> | Actividade: <span className={styles.strong} id="QV_JwfdEX">Desportos Náuticos</span></p>
                <p className={styles.light} >Carteira: <span className={styles.strong} id="QV_xgdQXGD">Uma carteira</span> | Responsável: <span className={styles.strong} id="QV_LKckSc">Zé das Couves</span></p>
            </motion.div>
        </div>
    )
}

export default AvatarArea