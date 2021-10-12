import styles from './Trends.module.css'

const qlikObj = [
  {
		id: "QV_GraphDistribContratos",
		qlikId: "ghyHx"
	},{
		id: "QV_TrendsEvFact",
		qlikId: "Rhuybf"
	},
	{
		id: "QV_TrendsEvServ",
		qlikId: "YjTJTg"
	}
]

const Trends = props => {
    
  if(window.appCarteira !== undefined){
    qlikObj.forEach((item) => {
      window.appCarteira.getObject(item.id, item.qlikId);
    })
  }

  return (
    <div className={styles.wrapper}>

      <div id="QV_GraphDistribContratos"></div>
      <div id="QV_TrendsEvFact"></div>
      <div id="QV_TrendsEvServ"></div>

            {/* <div id="TrendsEvFact" class="col-sm-4">
              
              
              <div id="QV_Legend_Fact" class="vodafone-subtitle-container container col-sm-12">
                <div class="vodafone-subtitle col-sm-6">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-red"></div></td>
                    <td><p class="vodafone-subtitle-description">GSM</p></td></tr>
                  </tbody></table>
                </div>
                <div class="vodafone-subtitle col-sm-6">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-green"></div></td>
                    <td><p class="vodafone-subtitle-description">Fixo</p></td></tr>
                  </tbody></table>
                </div>
              </div>
            </div>


            <div id="TrendsEvServ" class="col-sm-4">
              
              
              <div id="QV_Legend_Serv" class="vodafone-subtitle-container container col-sm-12">
                <div class="vodafone-subtitle col-sm-1">
                  <table><tbody>
                    <td><p class="vodafone-subtitle-description"></p></td>
                  </tbody></table>
                </div>												
                <div class="vodafone-subtitle col-sm-2">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-red"></div></td>
                    <td><p class="vodafone-subtitle-description">Voz Móvel</p></td></tr>
                  </tbody></table>
                </div>
                <div class="vodafone-subtitle col-sm-2">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-yellow"></div></td>
                    <td><p class="vodafone-subtitle-description">Dados Móveis</p></td></tr>
                  </tbody></table>
                </div>
                <div class="vodafone-subtitle col-sm-2">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-darkblue"></div></td>
                    <td><p class="vodafone-subtitle-description">IOT Global</p></td></tr>
                  </tbody></table>
                </div>
                <div class="vodafone-subtitle col-sm-2">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-blue"></div></td>
                    <td><p class="vodafone-subtitle-description">IOT Local</p></td></tr>
                  </tbody></table>
                </div>
                <div class="vodafone-subtitle col-sm-2">
                  <table><tbody>
                    <tr><td style="width: 20px;"><div class="vodafone-subtitle-square vodafone-subtitle-color-green"></div></td>
                    <td><p class="vodafone-subtitle-description">Fixo</p></td></tr>
                  </tbody></table>
                </div>			
              </div>              
            </div> */}

  </div>
  )
}

export default Trends