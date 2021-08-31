
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { Fragment } from 'react'
import Button from '../UI/Button'


const Tables = ({ data }) => {

    const smallWindow = window.innerHeight < 920

    const columns = [
        { name: 'id', header: 'Id', defaultVisible: false, type: 'number' },
        { name: 'NifGrupo', header: 'Nif Grupo', defaultWidth: 110, headerAlign: 'center', textAlign: 'center' },
        { name: 'NifGrupoDesc', header: 'Grupo', defaultWidth: 110, headerAlign: 'center', textAlign: 'center' },
        { name: 'Nif', header: 'NIF Entidade', defaultWidth: 110, headerAlign: 'center', textAlign: 'center' },
        { name: 'NifDesc', header: 'Entidade', headerAlign: 'center', textAlign: 'center' },
        { name: 'Responsavel', header: 'Responsável', headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalEstadoOps', header: 'Total', group: 'estado', headerAlign: 'center', textAlign: 'center', defaultWidth: 65, style:{background:'#485461', color:'#fff'} },
        { name: 'TotalEstadoIQ', header: 'I&Q', group: 'estado', headerAlign: 'center', textAlign: 'center', defaultWidth: 65 },
        { name: 'TotalEstadoPN', header: 'P&N', group: 'estado', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalEstadoF', header: 'F', group: 'estado', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalRefidelizaçao', header: 'Total', group: 'refidelizacao', headerAlign: 'center', textAlign: 'center', defaultWidth: 65, style:{background:'#485461', color:'#fff'} },
        { name: 'TotalRefidelizacaoVM', header: 'VM', group: 'refidelizacao', defaultWidth: 65, textAlign: 'center', },
        { name: 'TotalRefidelizacaoDM', header: 'DM', group: 'refidelizacao', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalRefidelizacaoIOT', header: 'IOT', group: 'refidelizacao', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalRefidelizacaoFixo', header: 'FIXO', group: 'refidelizacao', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalNovaReceita', header: 'Total', group: 'novareceita', headerAlign: 'center', textAlign: 'center', defaultWidth: 65, style:{background:'#485461', color:'#fff'} },
        { name: 'TotalNovaReceitaVM', header: 'VM', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalNovaReceitaDM', header: 'DM', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalNovaReceitaIOT', header: 'IOT', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
        { name: 'TotalNovaReceitaFixo', header: 'FIXO', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' }
    ]

    const groups = [
        { name: 'estado', header: 'Estado', headerAlign: 'center' },
        { name: 'refidelizacao', header: 'Refidelização', headerAlign: 'center', group: 'tipo' },
        { name: 'novareceita', header: 'Nova Receita', headerAlign: 'center', group: 'tipo' },
        { name: 'tipo', header: 'Tipo', headerAlign: 'center' },
    ]



    const gridStyle = { height: smallWindow ? '300px' : '400px'  } 

    return (
        <Fragment>
            <h4>Título Tab Tables</h4>
            <br />
            <p>Do labore eu aliqua sint culpa excepteur eu occaecat irure. Eiusmod commodo aute exercitation veniam aliquip laborum ea adipisicing.</p>
            <ReactDataGrid
                style={gridStyle}
                columns={columns}
                dataSource={data}
                groups={groups}
                checkboxColumn={false}
                idProperty="id"
                enableKeyboardNavigation={false}
                pagination="local"
                defaultLimit={smallWindow ? 6 : 10}
            />
            <Button text="Exportar" backgroundColor="#c20707" marginTop="30"/>
        </Fragment>
    )

}

export default Tables