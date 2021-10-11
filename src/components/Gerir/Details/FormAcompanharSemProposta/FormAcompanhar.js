import styles from './FormAcompanhar.module.css'
import React, { useState, useEffect } from 'react'
import OportunidadesSelecionadas from '../FormPropor/OportunidadesSelecionadas'






const FormAcompanhar = ({ formContent }) => {


    const [oportunidades, setOportunidades] = useState(formContent)


    const deleteOportunidade = id => {
        const filteredOpor = oportunidades.filter(opo => opo.Id !== id)
        setOportunidades(filteredOpor)
    }

    return (

        <div className={styles.wrapper}>
            <div className={`${styles.contentWrapper}`} >

                <OportunidadesSelecionadas data={oportunidades} handler={deleteOportunidade} />
            </div>
        </div>
    )
}



export default FormAcompanhar