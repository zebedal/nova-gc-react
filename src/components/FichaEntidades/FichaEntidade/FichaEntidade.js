
import Card from '../../UI/Card'
import AvatarArea from './AvatarArea/AvatarArea'
import DynamicArea from './DynamicArea/DynamicArea'
import Metricas from './Metricas/Metricas'
import Semaforos from './Semaforos/Semaforos'

const FichaEntidade = props => {

    return (
        <Card padding={0}>
            <AvatarArea  />
            <DynamicArea />
            <Metricas />
            <Semaforos />
        </Card>
    )
}
export default FichaEntidade