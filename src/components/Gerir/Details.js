
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'



const Details = ({ data }) => {

  
    const columnTitles = []


    const extractColumnNames = () => {
        const { NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV } = data[0]
        let subset = {NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV }
       
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
    


    const gridStyle = { minHeight: 400 }



    const handleRowSelection = (data) => {
        console.log(data)
    }



    return (
       
        
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
            defaultLimit={10}
        />


        </div>
    )

}

export default Details