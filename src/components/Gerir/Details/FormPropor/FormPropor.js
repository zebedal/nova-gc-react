import styles from './FormPropor.module.css'
import Button from '../../../UI/Button'
import create from '../../../../assets/img/create.svg'
import union from '../../../../assets/img/union.svg'
import notes from '../../../../assets/img/notes.svg'
import React, { useState, useRef, Suspense, useEffect } from 'react'
import Notas from './Notas'
import OportunidadesSelecionadas from './OportunidadesSelecionadas'
import PropostasAssociar from './PropostasAssociar'
import Spinner from '../../../UI/Spinner'
import checkmark from '../../../../assets/img/checkmark_verde.svg'
import axios from 'axios'


const breakPoints = [
    /* { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 300, itemsToShow: 2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 4, itemsToScroll: 1 },
    { width: 700, itemsToShow: 4, itemsToScroll: 1, pagination: true }, */
]

const checkBothArr = (arr1, arr2) => {
    return arr1.every(el => arr2.includes(el))
}

const CriarProposta = React.lazy(() => import('./CriarProposta/CriarProposta'))

const FormPropor = ({ formContent }) => {


    const [oportunidades, setOportunidades] = useState(formContent)
    const [propostas, setPropostas] = useState()
    const [filteredPropostas, setFilteredPropostas] = useState()
    const [notasOpen, setNotasOpen] = useState(false)
    const [savedNotas, setSavedNotas] = useState("")
    const [criarProposta, setCriarProposta] = useState(false)
    const [selectedProposta, setSelectedProposta] = useState(false)
    
    
    const notasInput = useRef("")

    useEffect(() => {
        (async() => {
            const res = await axios.get('/data/propostasSimulador.json')
            const data = res.data.Result


            const arr = []
            for(const obj of data) {
                const newObj = {
                    id: obj.Proposalid,
                    dataCriacao: obj.CreateDate,
                    entidade: obj.Customer,
                    linhaNegocio: obj.Proposaltype,
                    sfid: obj.SFID,
                    estado: obj.Status,
                    nif: obj.NIF,
                    selected: false
                }
                arr.push(newObj)
            }

            setFilteredPropostas(arr) 
            setPropostas(arr)
        })();
    }, [])



    const saveNotas = () => {
        setSavedNotas(notasInput.current.value)
        setNotasOpen(false)
    }


    const deleteOportunidade = id => {
        const filteredOpor = oportunidades.filter(opo => opo.Id !== id)
        setOportunidades(filteredOpor)
    }

    const handlePropostas = objId => {
        const newArr = filteredPropostas.map(obj => {
            if (obj.id === objId && obj.selected) return { ...obj, selected: false }
            else if (obj.id === objId && !obj.selected) return { ...obj, selected: true }
            else return obj
        })

        //verifica se pelo menos uma das propostas está seleccionada para desabilitar o botão de associar
        const isSelected = newArr.some(el => el.selected === true)

        //devolve as propostas selecionadas 
        const filtered = newArr.filter(el => el.selected === true)
        const linhasNegocioPropostas = filtered.map(el => el.linhaNegocio)
        const linhasNegocioOportunidades = oportunidades.map(el => el.LinhaNegocio)
        const result = checkBothArr(linhasNegocioPropostas, linhasNegocioOportunidades)
    

        setSelectedProposta(result && isSelected)
        setFilteredPropostas(newArr)
    }


    const toggleCriarProposta = () => {
        setCriarProposta(!criarProposta)
    }

    if(!propostas) return <div style={{margin:'120px 0'}}><Spinner text="A carregar propostas" /></div>

   

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.contentWrapper}`} style={{ display: notasOpen || criarProposta ? 'none' : 'block' }}>


                <OportunidadesSelecionadas data={oportunidades} handler={deleteOportunidade} />
                <div className={styles.Header}>
                    <h5>Tipo de acompanhamento</h5>
                    <div>
                        <select className={styles.formControl}>
                            <option>Cliente solicitou proposta</option>
                            <option>Proposta entregue</option>
                        </select>
                    </div>
                </div>
                <PropostasAssociar initialData={propostas} filtered={filteredPropostas} handler={handlePropostas} setFiltered={setFilteredPropostas} />

                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <div className={styles.informacoes} onClick={() => setNotasOpen(true)} style={{ padding: '0 10px' }}>
                        <img src={notes} style={{ verticalAlign: 'middle' }} alt="" />&nbsp;
                        <span style={{ fontSize: '12px' }}>Inserir Informações</span>
                        {(!notasOpen && savedNotas.length > 0) && <img src={checkmark} alt="" /> }
                    </div>
                    <div>
                        <Button text="Criar" backgroundColor="var(--red)" click={toggleCriarProposta}>
                            <img src={create} alt="" style={{ verticalAlign: 'text-bottom' }} />&nbsp;&nbsp;
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button text="Guardar" backgroundColor="var(--green)" disable={selectedProposta ? false : true}><img src={union} alt="" style={{ verticalAlign: 'text-bottom' }} />&nbsp;&nbsp;</Button>
                    </div>
                </div>


            </div>

            <Notas close={() => setNotasOpen(false)} opened={notasOpen} ref={notasInput} save={saveNotas} />

            {
                criarProposta && <Suspense fallback={<Spinner text="A carregar dados..." width={30} heighht={35} />}>
                    <CriarProposta close={toggleCriarProposta} oportunidadesSelecionadas={oportunidades} />
                </Suspense>
            }


        </div>
    )
}



export default FormPropor