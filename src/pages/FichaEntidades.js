import React, { Fragment, useState } from 'react'
import TabList from '../components/UI/Tabs/TabList'
import styles from './FichaEntidades.module.css'
import FichaEntidade from '../components/FichaEntidades/FichaEntidade'
import Card from '../components/UI/Card'

const FichaEntidades = props => {


    

    return (
        <div className={styles.wrapper}>
            <FichaEntidade />
            {/* <TabList /> */}
            <Card />
        </div>
    )

        
        

}

export default FichaEntidades