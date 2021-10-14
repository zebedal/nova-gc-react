import styles from '../FormPropor/FormPropor.module.css'
import React, { useState, useRef } from 'react'
import OportunidadesSelecionadas from '../FormPropor/OportunidadesSelecionadas'
import Notas from '../FormPropor/Notas'
import notes from '../../../../assets/img/notes.svg'
import checkmark from '../../../../assets/img/checkmark_verde.svg'
import Button from '../../../UI/Button'
import create from '../../../../assets/img/create.svg'
import Switch from "react-switch";



const motivosFecho = {
    checked: ['Negócio fechado e contrato carregado', 'Negócio fechado e em implementação'],
    notChecked: ['Não existe disponibilidade técnica', 'NIF extinto',
        'Serviço existente no NIF ou Grupo', 'NIF acompanhado por outra entidade Vodafone',
        'Dados de contacto insuficientes/incorrectos', 'Cliente não tem interesse', 'Cliente fidelizado na concorrência', 'Cliente incontactável']
}


const FormFechar = ({ formContent }) => {


    const [oportunidades, setOportunidades] = useState(formContent)
    const [notasOpen, setNotasOpen] = useState(false)
    const [savedNotas, setSavedNotas] = useState("")
    const [switchChecked, setSwitchChecked] = useState(false)

    const notasInput = useRef("")
    const motivos = useRef([...motivosFecho.notChecked])


    const deleteOportunidade = id => {
        const filteredOpor = oportunidades.filter(opo => opo.Id !== id)
        setOportunidades(filteredOpor)
    }

    const saveNotas = () => {
        console.log(notasInput.current)
        setSavedNotas(notasInput.current.value)
        setNotasOpen(false)
    }

    const switchHandler = () => {
        let arr = []
        if (switchChecked) {
            arr = [...motivosFecho.notChecked]
            motivos.current = arr
        } else {
            arr = [...motivosFecho.checked]
            motivos.current = arr
        }
        setSwitchChecked(!switchChecked)
    }

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.contentWrapper}`} style={{ display: notasOpen ? 'none' : 'block' }}>

                <OportunidadesSelecionadas data={oportunidades} handler={deleteOportunidade} />
                <div style={{ paddingLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h5>Tipo de fecho:</h5>&nbsp;
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '10px', fontWeight: '500' }}>{switchChecked ? "Fechar com sucesso" : "Fechar sem sucesso"}&nbsp;&nbsp;</span>
                        <Switch onChange={switchHandler}
                            checked={switchChecked}
                            offColor="#c20707"
                            activeBoxShadow="0 0 2px #485461"
                            width={50}
                            height={25}
                            handleDiameter={23}
                        />
                    </div>
                </div>
                <div className={styles.Header}>
                    <h5>Motivo</h5>
                    <div>
                        <select className={styles.formControl}>
                            {motivos.current.map((motivo, index) => <option key={index}>{motivo}</option>)}
                        </select>
                    </div>
                </div>
                <div className={styles.Header}>
                    <h5>Contratos a associar</h5>
                </div>
                <br />
                <br />
                <br />
                <br />
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



export default FormFechar