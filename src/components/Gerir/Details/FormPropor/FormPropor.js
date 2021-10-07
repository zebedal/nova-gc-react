import styles from './FormPropor.module.css'
import Button from '../../../UI/Button'
import create from '../../../../assets/img/create.svg'
import union from '../../../../assets/img/union.svg'
import notes from '../../../../assets/img/notes.svg'
import { useState, useRef } from 'react'
import Notas from './Notas'
import OportunidadesSelecionadas from './OportunidadesSelecionadas'
import PropostasAssociar from './PropostasAssociar'



const breakPoints = [
    /* { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 300, itemsToShow: 2, itemsToScroll: 1 },
    { width: 500, itemsToShow: 4, itemsToScroll: 1 },
    { width: 700, itemsToShow: 4, itemsToScroll: 1, pagination: true }, */
]

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
        nif: 502008229,
        selected: false
    },
    {
        id: 987123,
        dataCriacao: '10-07-2021',
        entidade: 'Dreamteam solutions',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 502008259,
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
        dataCriacao: '10-010-2021',
        entidade: 'Andrade & Sousa, Lda.',
        linhaNegocio: 'Fixo',
        sfid: '15001015',
        estado: 'Em Curso (Sem Proposta)',
        nif: 502008829,
        selected: false
    }
]

const FormPropor = ({ formContent }) => {


    const [oportunidades, setOportunidades] = useState(formContent)
    const [propostas, setPropostas] = useState(marteladas)
    const  [filteredPropostas, setFilteredPropostas] = useState(marteladas)
    const [notasOpen, setNotasOpen] = useState(false)
    const [selectedProposta, setSelectedProposta] = useState(false)
    const notasInput = useRef("")
    


    const saveNotas = () => {
        notasInput.current = notasInput.current.value
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

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.contentWrapper}`} style={{ display: notasOpen ? 'none' : 'block' }}>

                <OportunidadesSelecionadas data={oportunidades} handler={deleteOportunidade}/>

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
                    </div>
                    <div>
                        <Button text="Criar" backgroundColor="var(--red)"><img src={create} alt="" style={{ verticalAlign: 'text-bottom' }} />&nbsp;&nbsp;</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button text="Associar" backgroundColor="var(--green)" disable={selectedProposta ? false : true}><img src={union} alt="" style={{ verticalAlign: 'text-bottom' }} />&nbsp;&nbsp;</Button>
                    </div>
                </div>
            </div>

            <Notas close={() => setNotasOpen(false)} opened={notasOpen} ref={notasInput} save={saveNotas} />

        </div>
    )
}



export default FormPropor