import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import React, { useEffect } from 'react'



const DataGrid = ({ jsonData }) => {

    useEffect(() => {
        console.log('Datagrid has been rendered...')
    })

    const data = jsonData

    const columnTitles = []


    const extractColumnNames = () => {
        const { NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV } = data[0]
        let subset = { NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV }
        for (const prop in subset) {
            columnTitles.push({
                name: prop,
                header: prop
            })
        }
    }
    extractColumnNames()

    const rowData = () => {
        return data.map(obj => {
            let newObj = {}
            for (const columnObj of columnTitles) {
                newObj = {
                    ...newObj,
                    [columnObj.name]: obj[columnObj.name]
                }
            }
            return newObj
        })
    }
    const gridStyle = { minHeight: 300 }
    return (
        <ReactDataGrid

            style={gridStyle}
            columns={columnTitles}
            dataSource={rowData}
        />
    )
}



export default React.memo(DataGrid)