import styles from './FormPropor.module.css'
import Button from '../../../UI/Button'
import create from '../../../../assets/img/create.svg'
import union from '../../../../assets/img/union.svg'
import notes from '../../../../assets/img/notes.svg'
import React, { useState, useRef, Suspense } from 'react'
import Notas from './Notas'
import OportunidadesSelecionadas from './OportunidadesSelecionadas'
import PropostasAssociar from './PropostasAssociar'
import Spinner from '../../../UI/Spinner'
import checkmark from '../../../../assets/img/checkmark_verde.svg'


const breakPoints = [
    /* { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 300, itemsToShow: 2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 4, itemsToScroll: 1 },
    { width: 700, itemsToShow: 4, itemsToScroll: 1, pagination: true }, */
]

const CriarProposta = React.lazy(() => import('./CriarProposta/CriarProposta'))

const marteladas = [
    {
        id: 345123,
        dataCriacao: '02-09-2021',
        entidade: 'Costa e carvalho, Lda.',
        linhaNegocio: 'Móvel',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 502008229,
        selected: false
    },
    {
        id: 236721,
        dataCriacao: '07-09-2021',
        entidade: 'Mister entidades',
        linhaNegocio: 'Móvel',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 505008229,
        selected: false
    },
    {
        id: 987123,
        dataCriacao: '10-07-2021',
        entidade: 'Dreamteam solutions',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 505008259,
        selected: false
    },
    {
        id: 987163,
        dataCriacao: '10-11-2021',
        entidade: 'Logiweb Technical Solutions',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 502008329,
        selected: false
    },
    {
        id: 125432,
        dataCriacao: '10-10-2021',
        entidade: 'Andrade & Sousa, Lda.',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 503008829,
        selected: false
    },
    {
        id: 9521475,
        dataCriacao: '10-10-2021',
        entidade: 'Montiperes & Filhos, S.A',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 503008829,
        selected: false
    },
    {
        id: 2541478,
        dataCriacao: '10-10-2021',
        entidade: 'Associação Mutualista Nossa Senhora',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 505008829,
        selected: false
    }
]

const FormPropor = ({ formContent }) => {


    const [oportunidades, setOportunidades] = useState(formContent)
    const [propostas, setPropostas] = useState(marteladas)
    const [filteredPropostas, setFilteredPropostas] = useState(marteladas)
    const [notasOpen, setNotasOpen] = useState(false)
    const [savedNotas, setSavedNotas] = useState("")
    const [criarProposta, setCriarProposta] = useState(false)
    const [selectedProposta, setSelectedProposta] = useState(false)
    
    
    const notasInput = useRef("")



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
        setSelectedProposta(isSelected)
        setFilteredPropostas(newArr)
    }


    const toggleCriarProposta = () => {
        setCriarProposta(!criarProposta)
    }


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