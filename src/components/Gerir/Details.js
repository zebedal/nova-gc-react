
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import { Fragment } from 'react'
import Button from '../UI/Button'

const Details = ({ data }) => {


    const columnTitles = []
    const smallWindow = window.innerHeight < 920
  


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
        return data.map((obj, index) => {
            let newObj = {}
            for (const columnObj of columnTitles) {
                newObj = {
                    ...newObj,
                    [columnObj.name]: obj[columnObj.name],
                    id: index
                }
            }
            return newObj
        })
    }

console.log(rowData())

    const gridStyle = { height: smallWindow ? '300px' : '400px'  } 



    const handleRowSelection = (data) => {
        console.log(data)
    }



    return (
        <Fragment>
            <h4>Título Tab Details</h4>
            <br />
            <p>Do labore eu aliqua sint culpa excepteur eu occaecat irure. Eiusmod commodo aute exercitation veniam aliquip laborum ea adipisicing. Tempor aliquip dolore sint ullamco consequat duis voluptate eu velit dolor in quis ea dolore. Culpa amet elit est mollit tempor aute do culpa elit in et.</p>

            <div>
                <ReactDataGrid
                    style={gridStyle}
                    columns={columnTitles}
                    dataSource={rowData}
                    checkboxColumn={true}
                    checkboxOnlyRowSelect={true}
                    idProperty="id"
                    onSelectionChange={handleRowSelection}
                    enableKeyboardNavigation={false}
                    pagination="local"
                    defaultLimit={smallWindow ? 6 : 10}
                />

                <div className={StyleSheet.BotoesRow} style={{display: 'flex', justifyContent: 'space-between', marginTop:'30px'}}>
                    <div>
                        <Button text='Form Oportunidade' backgroundColor="#c20707"/>
                    </div>
                    <div style={{display:'flex', gap:'10px'}}>
                    <Button text='Acom. sem proposta' backgroundColor="#a612ba"/>
                    <Button text='Propor & Negociar' backgroundColor="#10800c"/>
                    <Button text='Fechar' backgroundColor="#c20707"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Details