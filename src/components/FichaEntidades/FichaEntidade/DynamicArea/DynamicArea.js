
import { useState, Fragment } from 'react'
import ActionButtons from  './ActionButtons/ActionButtons'
import Contas from '../../../svg/FichaEntidade/ActionButtons/Contas'
import Facturacao from '../../../svg/FichaEntidade/ActionButtons/Facturacao'
import Fidelizacao from '../../../svg/FichaEntidade/ActionButtons/Fidelizacao'
import Servicos from '../../../svg/FichaEntidade/ActionButtons/Servicos'
import ContentArea from './ContentArea/ContentArea'

const DynamicArea = props => {

    const [selectedButton, setSelectedButton] = useState(1)

    

    const actionButtons = [
        {
            id: 1,
            title: "Contas",
            component: <Contas />
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

    const handleActionButtonClick = buttonId => {
        setSelectedButton(buttonId)
    }

    return (
        <Fragment>
            <ActionButtons buttons={actionButtons} activeButton={selectedButton} setSelected={handleActionButtonClick} />
            <ContentArea activeContent={selectedButton} />
        </Fragment>
    )
}

export default DynamicArea