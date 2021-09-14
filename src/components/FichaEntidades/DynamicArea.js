import styles from './DynamicArea.module.css'
import { useState, Fragment } from 'react'
import ActionButtons from './ActionButtons'
import Contas from '../svg/FichaEntidade/ActionButtons/Contas'
import Facturacao from '../svg/FichaEntidade/ActionButtons/Facturacao'
import Fidelizacao from '../svg/FichaEntidade/ActionButtons/Fidelizacao'
import Servicos from '../svg/FichaEntidade/ActionButtons/Servicos'


const DynamicArea = props => {

    const [selectedButton, setSelectedButton] = useState('contas')

    

    const buttons = [
        {
            id: 1,
            title: "Contas",
            component: <Contas />,
            selected: true
        },
        {
            id: 2,
            title: "Facturação",
            component: <Facturacao />
        },
        {
            id: 3,
            title: "Fidelização",
            component: <Fidelizacao />
        },
        {
            id: 4,
            title: "Serviços",
            component: <Servicos />
        }
    ]


    

    return (
        <Fragment>
            <ActionButtons buttons={buttons}  />
            {/* <ContentArea /> */}
        </Fragment>
    )
}

export default DynamicArea