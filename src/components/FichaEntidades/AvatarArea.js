import Avatar from '../svg/FichaEntidade/Avatar'
import styles from './AvatarArea.module.css'
import Badges from './Badges'
import Star from '../svg/FichaEntidade/Star'
import Smart from '../svg/FichaEntidade/Smart'
import Shield from '../svg/FichaEntidade/Shield'
import Cloud from '../svg/FichaEntidade/Cloud'

const AvatarArea = props => {

  
    const badgesObj = [
        {
            id: 1,
            visible: true,
            component: <Star />,
            title: "Antiguidade do cliente"
        },
        {
            id: 2,
            visible: true,
            component: <Smart />,
            title: "Smart solutions"
        },
        {
            id: 3,
            visible: true,
            component: <Shield />,
            title: "Segurança"
        },
        {
            id: 4,
            visible: true,
            component: <Cloud />,
            title: "Cloud solutions"
        },
         
    ]

    const filteredArr = badgesObj.filter(el => el.visible === true)


    return (
        <div className={styles.wrapper}>
            <Avatar />
            <p>Zé das Couves, Lda. - 500527417</p>
            <Badges badges={filteredArr} />
            <p>Nome do Grupo - 500258741</p> 
            <p className={styles.light}>Nº Colab.<span className={styles.strong}>45</span> | Actividade: <span className={styles.strong}>Desportos Náuticos</span></p>
            <p className={styles.light}>Carteira<span className={styles.strong}>Uma carteira</span> | Responsável: <span className={styles.strong}>Zé das Couves</span></p>
        </div>
    )
}

export default AvatarArea