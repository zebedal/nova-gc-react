import styles from './Layout.module.css'
import Header from './Navigation/Header'


const Layout = props => {

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles['inner-wrapper']}>
                <main>
                    {props.children}
                </main>
            </div>
        </div>
    )
}



export default Layout