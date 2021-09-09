
import styles from './Snapshot.module.css'
import SnapshotPanel from './SnapshotPanel';
import { useReducer, useRef } from 'react'
import MoreOptions from '../../UI/MoreOptions';
import { Fragment } from 'react'
import { chartOptions } from '../../../data/snapShotChartData'
import { snapShotDataReducer } from '../../../reducers/snapshot-reducer'

const snapShotSelectorOptions = ['Volume', 'Valor'];

const splitString = arr => {
  return arr.map(string => {
    if (string.includes('#')) {
      const splitedArr = string.split(' ')
       splitedArr.splice(0, 1)
       return splitedArr.join(' ')
    } else return string
    
  })
}

const Snapshot = ({ data }) => {


  const snapShotData = data

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
    if (filter === 'Volume') {
      selectedFilter.current = filter
      dispatchFilter({ payload: snapShotInitialState, type: 'volume' })
    }
    if (filter === 'Valor') {
      selectedFilter.current = filter
      dispatchFilter({ payload: snapShotData.valor, type: 'valor' })
    }
  }


  //Mapeamento dos objectos
  const chart1 = JSON.parse(JSON.stringify(chartOptions))
  chart1.options.xaxis.categories = snapShotData.dataGraficos.GraficoOportunidadesEmAberto.LabelsGrafico
  chart1.series = snapShotData.dataGraficos.GraficoOportunidadesEmAberto.SerieGrafico

  const chart3 = JSON.parse(JSON.stringify(chartOptions))
  chart3.options.xaxis.categories = splitString(snapShotData.dataGraficos.GraficoOportunidadesComProposta.LabelsGrafico)
  chart3.series = snapShotData.dataGraficos.GraficoOportunidadesComProposta.SerieGrafico



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
          chartData={chart1.series}
          chartOptions={chart1.options}
          headerData={selectedData.panel1HeaderData}
          title="Oportunidades em aberto"
          filterValor={selectedFilter.current === 'Valor' ? true : false}
          color="#D53FE6"
          gridItemsColor="#363636"
        />
        <SnapshotPanel
          chartData={[]}
          chartOptions={chart1.options}
          headerData={selectedData.panel2HeaderData}
          title="Oportunidades em curso"
          filterValor={selectedFilter.current === 'Valor' ? true : false}
          color="#a612ba"
          gridItemsColor="#363636"
        /> 
        <SnapshotPanel
          chartData={chart3.series}
          chartOptions={chart3.options}
          headerData={selectedData.panel3HeaderData}
          title="Oportunidades c/ proposta"
          filterValor={selectedFilter.current === 'Valor' ? true : false}
          color="#10800c"
          gridItemsColor="#363636"
        />
      </div>
    </Fragment>
  )
}

export default Snapshot