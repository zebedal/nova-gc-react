import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import React, { useState, useRef, Suspense, useEffect } from 'react'
import Button from '../../UI/Button'
import CustomModal from '../../UI/CustomModal'
import Spinner from '../../UI/Spinner'
import FormAcompanhar from './FormAcompanharSemProposta/FormAcompanhar'
import FormFechar from './FormFechar/FormFechar'
import Card from '../../UI/Card'

const FormPropor = React.lazy(() => import('./FormPropor/FormPropor'))

const Details = ({ data }) => {

   
    const smallWindow = window.innerHeight < 920
    const gridStyle = { height: smallWindow ? '300px' : '400px' }


    const [modalOpen, setModalOpen] = useState(false)
    const [selectedRowData, setSelectedRowData] = useState([])
    const [rowData, setRowData] = useState(null)
    const [showAllButtons, setShowAllButtons] = useState(false)
    const [showFormOportunidades, setShowFormOportunidades] = useState(true)


    const modalTitle = useRef("")
    const selectedModalContentId = useRef(0)
    const columnTitles = useRef(new Array())



    useEffect(() => {

   

        const extractColumnNames = () => {
            const {LeadId, NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV, SFID, Id } = data[0]
            let subset = {LeadId, NifGrupo, NifGrupoDesc, Nif, NifDesc, Responsavel, tipoLead, TipoOportunidade, LinhaNegocio, Campanha, EstadoProposta, TCV, SFID, Id}
    
            for (const prop in subset) {
                columnTitles.current.push({
                    name: prop,
                    header: prop
                })
            }
        }
        extractColumnNames()

        const rdata =  () => {
            
            return data.map((obj, index) => {
                let newObj = {}
                for (const columnObj of columnTitles.current) {
                    newObj = {
                        ...newObj,
                        [columnObj.name]: obj[columnObj.name],
                        id: index
                    }
                }
                return newObj
            })
            
        }
        rdata()

        setRowData(rdata)

    }, [])


    if(!rowData) {
        return <Card margin={0} padding={30}>
        <div style={{padding:'50px 0'}}>
            <Spinner text="A carregar dados, por favor aguarde..." width={30} height={35} />
        </div>
        </Card>
    }

    const handleRowSelection = (data) => {
        console.log('running handle row selection')
        const selectedKeys = Object.keys(data.selected)
        let arr = []
        for (const key of selectedKeys) {
            arr = [...arr, { ...data.selected[key] }]
        }

        if (arr.length === 1) {
            setShowAllButtons(true)
            setSelectedRowData(arr)
        } else if (arr.length > 1) {
            const firstSelectedNif = arr[0].NifGrupo ? arr[0].NifGrupo : arr[0].Nif
            //verificar se o primeiro nif selecionado faz parte do array das outras seleções
            const isEqual = arr.every(el => {
                return el.NifGrupo === firstSelectedNif
            })
            if (isEqual) {
                setShowAllButtons(true)
                setSelectedRowData(arr)
            } else {
                setShowAllButtons(false)
                setSelectedRowData(arr)
            }

        } else {
            setShowAllButtons(false)
            setSelectedRowData(arr)
        }

    }


    const openModal = (title, id) => {
        modalTitle.current = title
        selectedModalContentId.current = id
        setModalOpen(true)
        setShowFormOportunidades(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setShowFormOportunidades(false)
    }



    return (
        <div>
            <h4>Título Tab Details</h4>
            <br />
            <p>Do labore eu aliqua sint culpa excepteur eu occaecat irure. Eiusmod commodo aute exercitation veniam aliquip laborum ea adipisicing. Tempor aliquip dolore sint ullamco consequat duis voluptate eu velit dolor in quis ea dolore. Culpa amet elit est mollit tempor aute do culpa elit in et.</p>

            <div>
                <ReactDataGrid
                    style={gridStyle}
                    columns={columnTitles.current}
                    dataSource={rowData}
                    checkboxColumn={true}
                    checkboxOnlyRowSelect={true}
                    idProperty="id"
                    onSelectionChange={handleRowSelection}
                    enableKeyboardNavigation={false}
                    pagination="local"
                    defaultLimit={smallWindow ? 6 : 10}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                    <div>
                        <Button text='Form Oportunidade' backgroundColor="#c20707" click={openModal} />
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button text='Acom. sem proposta' backgroundColor="#a612ba" click={openModal} id={1} disable={selectedRowData.length === 0 ? true : false} />
                        <Button text='Propor & Negociar' backgroundColor="#10800c" click={openModal} id={2} disable={showAllButtons ? false : true} />
                        <Button text='Fechar' backgroundColor="#c20707" click={openModal} id={3} disable={selectedRowData.length === 0 ? true : false} />
                    </div>
                </div>
            </div>


            <CustomModal open={modalOpen} modalTitle={modalTitle.current} onClose={closeModal} widthAuto={false}>
                {selectedModalContentId.current === 2 && <Suspense fallback={<div style={{padding:'50px 0'}}><Spinner text="A carregar dados..." width={30} height={35}/></div>}>
                    <FormPropor formContent={selectedRowData} /> </Suspense>}

                {selectedModalContentId.current === 1 && <FormAcompanhar formContent={selectedRowData} />}
                {selectedModalContentId.current === 3 && <FormFechar formContent={selectedRowData} />}
            </CustomModal>

            {/* {showFormOportunidades && <CustomModal open={showFormOportunidades} onClose={closeModal}>
                <iframe src="https://gestaocomercial-ebu.internal.vodafone.com/Customer/formsProd/form-oportunidades/index.html?nif=501943536&userId=12349&userName=LEAODM"></iframe>
            </CustomModal>} */}

        </div>
    )

}

export default React.memo(Details)