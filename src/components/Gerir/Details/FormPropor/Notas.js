import styles from './Notas.module.css'
import React, {useState} from 'react'
import Success from '../../../UI/Success'

const Notas = React.forwardRef((props, ref) => {

    const [success, setSuccess] = useState(false)

    const handleSave = () => {
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            props.close()
        },2200)
    }


    return (
        <div className={styles.wrapper} style={{ display: props.opened ? 'block' : 'none' }}>


            <div style={{visibility: success ? 'hidden' : 'visible' }}>
            <h5>Informações adicionais</h5>
            <small style={{ fontSize: '9px' }}>Inserir observações adicionais</small>
            <br /><br />
            <textarea rows="20" cols="5" ref={ref} />
            <div className={styles.flex}>
                <div className={styles.Button} onClick={props.close}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="8" fill="#C20707" />
                        <path d="M5.27665 4.56953C5.08139 4.37426 4.7648 4.37426 4.56954 4.56953C4.37428 4.76479 4.37428 5.08137 4.56954 5.27663L5.27665 4.56953ZM11.3388 12.0459C11.534 12.2411 11.8506 12.2411 12.0459 12.0459C12.2411 11.8506 12.2411 11.534 12.0459 11.3388L11.3388 12.0459ZM4.56954 5.27663L11.3388 12.0459L12.0459 11.3388L5.27665 4.56953L4.56954 5.27663Z" fill="white" />
                        <path d="M4.56954 11.3388C4.37428 11.534 4.37428 11.8506 4.56954 12.0459C4.7648 12.2411 5.08139 12.2411 5.27665 12.0459L4.56954 11.3388ZM12.0459 5.27663C12.2411 5.08137 12.2411 4.76478 12.0459 4.56952C11.8506 4.37426 11.534 4.37426 11.3388 4.56952L12.0459 5.27663ZM5.27665 12.0459L12.0459 5.27663L11.3388 4.56952L4.56954 11.3388L5.27665 12.0459Z" fill="white" />
                    </svg>
                    <span>Cancelar</span>
                </div>

                <div className={styles.Button} onClick={handleSave} >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4142 2.41422L13.5858 0.585781C13.2107 0.210688 12.702 0 12.1716 0H11V3.5C11 3.77613 10.7761 4 10.5 4H2.5C2.22387 4 2 3.77613 2 3.5V0H1C0.44775 0 0 0.447688 0 1V15C0 15.5523 0.44775 16 1 16H15C15.5523 16 16 15.5523 16 15V3.82844C16 3.29797 15.7893 2.78928 15.4142 2.41422ZM14 14H2V8H14V14Z" fill="#484848" />
                        <path d="M9 0H7V3H9V0Z" fill="#484848" />
                    </svg>
                    <span>Guardar</span>
                </div>

            </div>
        </div>

        {success && <Success text="Informações guardadas com sucesso" />}
        </div>
    )
})

export default Notas