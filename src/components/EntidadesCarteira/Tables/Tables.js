import { useRef } from 'react'
import Expand from '../../svg/expand'
import Download from '../../svg/download'
import styles from './Tables.module.css'

const qlikObj = [
  {
		id: "QV_AgregadosCart",
		qlikId: "CqMHjW",
	},
	{
		id: "QV_AgregadosCartHier",
		qlikId: "PsRNkH",
	},
	{
		id: "QV_ContratosCarteira",
		qlikId: "XuPnjSh",
	},
	{
		id: "QV_ContratosCarteiraHier",
		qlikId: "kMdejU",
	}
]

const Tables = props => {

  const download = objIdExport => {
    console.log("Download", objIdExport)

    window.appCarteira.visualization.get(objIdExport).then(function(vis){
      vis.exportData({format:'OOXML', state: 'A'}).then(function (link) {
          window.open(link);
      });
    });
  }

  const expand = id => {
    console.log("Expand")
    console.log("id",id)

    if(document.getElementById(id).classList.contains('isFullscreen')){
      document.getElementById(id).classList.toggle('isFullscreen');
    }
  
    window.qlik.resize();
  }

  if(window.appCarteira !== undefined){
    qlikObj.forEach((item) => {
      window.appCarteira.getObject(item.id, item.qlikId);
    })
  }
    
  return (
    <div>                  
        <div className={styles.dropdownWrapper}>
            <div id="AgregOpt">
              <select id="TipoAgreg" name="TipoAgreg" className={styles.dropdown}>
                <option value="1" label="Drill Down">Drill Down</option>
                <option value="2" label="Hierarquia">Hierarquia</option>
              </select>
            </div>
            <div id="ContrOpt">
              <select id="TipoContr" name="TipoContr" className={styles.dropdown}>
                <option value="1" label="Caracterização">Caracterização</option>
                <option value="2" label="Contratos a Renegociar">Contratos a Renegociar</option>
              </select>
            </div>
        </div>						

        <div id="TablesMain">
          
          <div id="QV_AgregadosCarteira">
            <div id="QV_AgregDrill">
              <div className={styles.icon} onClick={() => download("CqMHjW")}><Download /></div>
              <div className={styles.icon} onClick={() => expand("QV_AgregDrill")}><Expand /></div>
              <div id="QV_AgregadosCart" className={styles.defaultSize}></div>
            </div>
            {/* <div id="QV_AgregHier">
              <div className={styles.icon}><Download /></div>
              <div className={styles.icon}><Expand /></div>
              <div id="QV_AgregadosCartHier" className={styles.defaultSize}></div>
            </div> */}
          </div>

          {/* <div id="QV_AgregadosContratos">
            <div id="QV_ContrDrill">
              <div className={styles.icon}><Download /></div>
              <div className={styles.icon}><Expand /></div>
              <div id="QV_ContratosCarteira" className={styles.defaultSize}></div>
            </div>
            <div id="QV_ContrHier">
              <div className={styles.icon}><Download /></div>
              <div className={styles.icon}><Expand /></div>
              <div id="QV_ContratosCarteiraHier" className={styles.defaultSize}></div>
            </div>									
          </div> */}
        </div>
    </div>
  )
}

export default Tables