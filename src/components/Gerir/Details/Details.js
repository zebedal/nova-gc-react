
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import React, { Fragment, useState, useRef, useCallback, Suspense } from 'react'
import Button from '../../UI/Button'
import CustomModal from '../../UI/CustomModal'

import Spinner from '../../UI/Spinner'

const FormPropor = React.lazy(() => import('./FormPropor/FormPropor'))

const Details = ({ data }) => {


    const columnTitles = []
    const smallWindow = window.innerHeight < 920
    const gridStyle = { height: smallWindow ? '300px' : '400px'  } 

    //Component state
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedRowData, setSelectedRowData] = useState([])

    const modalTitle = useRef("")
    const selectedModalContentId = useRef(0)
   


    const extractColumnNames = () => {
        const { NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV, SFID, Id } = data[0]
        let subset = { NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV, SFID, Id }

        for (const prop in subset) {
            columnTitles.push({
                name: prop,
                header: prop
            })
        }
    }
    extractColumnNames()

    const rowData = useCallback(() => {
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
    }, [])

    const handleRowSelection = (data) => {
        
        const selectedKeys = Object.keys(data.selected)
        let arr = []
        for(const key of selectedKeys) {
           arr = [...arr, {...data.selected[key]}]
        }

        setSelectedRowData(arr)
    }


    const openModal = (title, id) => {
        modalTitle.current = title
        selectedModalContentId.current = id
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
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

                <div  style={{display: 'flex', justifyContent: 'space-between', marginTop:'30px'}}>
                    <div>
                        <Button text='Form Oportunidade' backgroundColor="#c20707"/>
                    </div>
                    <div style={{display:'flex', gap:'10px'}}>
                        <Button text='Acom. sem proposta' backgroundColor="#a612ba" click={openModal} id={1} disable={selectedRowData.length === 0 ? true : false} />
                        <Button text='Propor & Negociar' backgroundColor="#10800c" click={openModal} id={2} disable={selectedRowData.length === 0 ? true : false}/>
                        <Button text='Fechar' backgroundColor="#c20707" click={openModal} id={3} disable={selectedRowData.length === 0 ? true : false} />
                    </div>
                </div>
            </div>

          
            <CustomModal open={modalOpen} modalTitle={modalTitle.current} onClose={closeModal} widthAuto={false}>
                {selectedModalContentId.current === 2 && <Suspense fallback={<Spinner />}>
                    <FormPropor formContent={selectedRowData} /> </Suspense>}
            </CustomModal>

{/* <pre>
    {JSON.stringify(selectedRowData, null, 2)}
</pre> */}
        </Fragment>
    )

}

export default Details