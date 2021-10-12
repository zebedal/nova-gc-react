import styles from '../FormPropor/FormPropor.module.css'
import React, { useState, useRef } from 'react'
import OportunidadesSelecionadas from '../FormPropor/OportunidadesSelecionadas'
import Notas from '../FormPropor/Notas'
import notes from '../../../../assets/img/notes.svg'
import checkmark from '../../../../assets/img/checkmark_verde.svg'
import Button from '../../../UI/Button'
import create from '../../../../assets/img/create.svg'

const FormAcompanhar = ({ formContent }) => {


    const [oportunidades, setOportunidades] = useState(formContent)
    const [notasOpen, setNotasOpen] = useState(false)
    const [savedNotas, setSavedNotas] = useState("")

    const notasInput = useRef("")


    const deleteOportunidade = id => {
        const filteredOpor = oportunidades.filter(opo => opo.Id !== id)
        setOportunidades(filteredOpor)
    }

    const saveNotas = () => {
        console.log(notasInput.current)
        setSavedNotas(notasInput.current.value)
        setNotasOpen(false)
    }

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.contentWrapper}`} style={{ display: notasOpen  ? 'none' : 'block' }}>
                <OportunidadesSelecionadas data={oportunidades} handler={deleteOportunidade} />
                <div className={styles.Header}>
                    <h5>Tipo de acompanhamento</h5>
                    <div>
                        <select className={styles.formControl}>
                            <option>Cliente contactado e demonstrou interesse</option>
                            <option>Cliente contactado e solução em análise</option>
                        </select>
                    </div>
                </div>

                <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                <div className={styles.informacoes} onClick={() => setNotasOpen(true)} style={{ padding: '0 10px' }}>
                    <img src={notes} style={{ verticalAlign: 'middle' }} alt="" />&nbsp;
                    <span style={{ fontSize: '12px' }}>Inserir Informações</span>
                    {(!notasOpen && savedNotas.length > 0) && <img src={checkmark} alt="" />}
                </div>
                <div>
                    <Button text="Criar" backgroundColor="var(--red)" >
                        <img src={create} alt="" style={{ verticalAlign: 'text-bottom' }} />&nbsp;&nbsp;
                    </Button>
                </div>
            </div>
            </div>
            

            <Notas close={() => setNotasOpen(false)} opened={notasOpen} ref={notasInput} save={saveNotas} />
        </div>
    )
}



export default FormAcompanhar