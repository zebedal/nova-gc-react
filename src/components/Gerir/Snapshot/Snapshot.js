
import styles from './Snapshot.module.css'
import SnapshotPanel from './SnapshotPanel';
import { useReducer, useRef } from 'react'
import MoreOptions from '../../UI/MoreOptions';
import { Fragment } from 'react'
import { chartsOptions } from '../../../data/snapShotChartData';
import {snapShotDataReducer} from '../../../reducers/snapshot-reducer'

const snapShotSelectorOptions = ['volume', 'valor'];




const Snapshot = ({ data }) => {

  
  
  const snapShotData = data

  console.log(snapShotData)

  const snapShotInitialState = {
    panel1HeaderData: {
      total: snapShotData.volume.TotalEmAberto,
      novaReceitaVodafone: snapShotData.volume.TotalNovaReceitaEmAbertoVDF,
      novaReceitaUser: snapShotData.volume.TotalNovaReceitaEmAbertoUser,
      refidelizaçãoVodafone: snapShotData.volume.TotalRefidelizacaoEmAbertoVDF,
      refidelizaçãoUser: snapShotData.volume.TotalRefidelizacaoEmAbertoUser,
      tcv: 1259324
    },
    panel2HeaderData: {
      total: snapShotData.volume.TotalEmCurso,
      novaReceitaVodafone: snapShotData.volume.TotalNovaReceitaEmCursoVDF,
      novaReceitaUser: snapShotData.volume.TotalNovaReceitaEmCursoUser,
      refidelizaçãoVodafone: snapShotData.volume.TotalRefidelizacaoEmCursoVDF,
      refidelizaçãoUser: snapShotData.volume.TotalRefidelizacaoEmCursoUser,
      tcv: 2456782
    },
    panel3HeaderData: {
      total: snapShotData.volume.TotalComProposta,
      novaReceitaVodafone: snapShotData.volume.TotalNovaReceitaComPropostaVDF,
      novaReceitaUser: snapShotData.volume.TotalNovaReceitaComPropostaUser,
      refidelizaçãoVodafone: snapShotData.volume.TotalRefidelizacaoComPropostaVDF,
      refidelizaçãoUser: snapShotData.volume.TotalRefidelizacaoComPropostaUser,
      tcv: 178213
    }
  }

  const selectedFilter = useRef('volume')
  const [selectedData, dispatchFilter] = useReducer(snapShotDataReducer, snapShotInitialState)


  const toggleFilter = (filter) => {
    if (filter === 'volume') {
      selectedFilter.current = filter
      dispatchFilter({payload: snapShotInitialState, type: 'volume'})
    }
    if (filter === 'valor') {
      selectedFilter.current = filter
      dispatchFilter({payload: snapShotData.valor, type: 'valor'})
    }
  }

  return (
    <Fragment>
      <div className={styles['card-header']}>
        <p>Como estão as oportunidades de negócio?</p>
        <div className={styles['more-options-wrapper']}><span>Filtro:</span>
          <MoreOptions
            absolute={false}
            selectorOptions={snapShotSelectorOptions}
            toggleFilter={toggleFilter} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <SnapshotPanel 
          chartData={chartsOptions.chart1} 
          headerData={selectedData.panel1HeaderData} 
          title="Oportunidades em aberto" 
          filterValor={selectedFilter.current === 'valor' ? true : false}
          color="#D53FE6"
          gridItemsColor="#363636"
          />
        <SnapshotPanel 
        chartData={chartsOptions.chart2} 
        headerData={selectedData.panel2HeaderData}  
        title="Oportunidades em curso" 
        filterValor={selectedFilter.current === 'valor' ? true : false}
        color="#a612ba"
        gridItemsColor="#363636"
        />
        <SnapshotPanel 
        chartData={chartsOptions.chart3} 
        headerData={selectedData.panel3HeaderData} 
        title="Oportunidades c/ proposta" 
        filterValor={selectedFilter.current === 'valor' ? true : false}
        color="#10800c"
        gridItemsColor="#363636"
        />
      </div>
    </Fragment>
  )
}

export default Snapshot