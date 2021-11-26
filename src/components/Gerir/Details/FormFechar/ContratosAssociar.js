
import Carousel, { consts } from 'react-elastic-carousel';
import Contrato from './Contrato'
import { useRef } from 'react'
import styles from '../FormPropor/FormPropor.module.css'
import chevron from '../../../../assets/img/chevron-right.svg'



const ContratosAssociar = ({ initialData, handler, setFiltered, filtered, selectAll }) => {


    const carousel = useRef()
    const inputRef = useRef()

    const changeHandler = () => {
        const valor = inputRef.current.value.toLowerCase().trim()
        const filteredData = initialData.filter(contrato => {
            return contrato.Entity.toLowerCase().includes(valor) || contrato.NIF.toString().includes(valor) ||
                contrato.Id.includes(valor) || contrato.BusinessLine.toLowerCase().includes(valor)
        })
        setFiltered(filteredData)
    }

    return (

        <div >
            <div className={`${styles.flexAssociar} ${styles.Header}`}>
                <div>
                    <h5>Contratos a associar</h5>
                    <small style={{ fontSize: '9px' }}>Selecione o(s) contratos(s) a associar</small>
                </div>
                <div style={{display:'flex', alignItems: 'center', gap:'20px'}}>
                    <div>
                        <input style={{width:'fit-content', verticalAlign:'middle'}} type="checkbox" id="selectAll" onChange={selectAll} />
                        <label style={{fontSize:'10px', marginLeft:'5px'}} htmlFor="selectAll">Selecionar todos:</label>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <input type="text" ref={inputRef} onChange={changeHandler} />
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ position: 'absolute', right: '5px', top: '4px' }}>
                            <path d="M10.3794 8.90099C12.18 6.3584 11.5778 2.83766 9.03522 1.0375C6.49263 -0.762659 2.97189 -0.160885 1.17173 2.38213C-0.628427 4.92472 -0.0266538 8.44503 2.51636 10.2452C4.33115 11.53 6.7305 11.629 8.64464 10.4985L12.8037 14.6327C13.2528 15.1054 14 15.1243 14.4727 14.6753C14.9454 14.2266 14.9643 13.4795 14.5157 13.0067C14.5015 12.9917 14.4877 12.9779 14.4727 12.9637L10.3794 8.90099ZM5.77213 9.2864C3.76293 9.28683 2.13397 7.65916 2.13268 5.64995C2.13225 3.64074 3.75991 2.01178 5.76955 2.01092C7.77618 2.01006 9.40428 3.63515 9.40815 5.64177C9.41159 7.65141 7.78478 9.28295 5.77472 9.2864C5.77385 9.2864 5.77342 9.2864 5.77213 9.2864Z" fill="#484848" />
                        </svg>
                    </div>
                </div>

            </div>
            <div style={{ marginTop: '5px', position: 'relative' }}>
                {filtered.length > 0 ? <Carousel
                    itemsToShow={4}
                    pagination={true}
                    showArrows={false}
                    ref={carousel}
                    itemPosition={consts.START}
                    itemPadding={[10, 10]}
                    renderPagination={({ pages, activePage, onClick }) => {
                        return (
                            <div>
                                {pages.map(page => {
                                    const isActivePage = activePage === page
                                    return (
                                        <span className={`${styles.dot} ${isActivePage ? styles.active : ""}`} key={page} onClick={() => onClick(page)}></span>
                                    )
                                }
                                )}
                            </div>
                        )
                    }}
                >
                    {filtered.map((obj, index) => <Contrato key={index}  {...obj} click={handler} />)}
                </Carousel> : <p style={{ marginTop: '10px', color: 'red', fontSize: '10px', paddingLeft: '10px' }}>Sem contratos para associar...</p>}
                <img src={chevron} style={{ width: '12px', position: 'absolute', right: '-25px', top: '55px', cursor: 'pointer' }} onClick={() => carousel.current.slideNext()} alt="" />
            </div>
        </div>
    )
}



export default ContratosAssociar