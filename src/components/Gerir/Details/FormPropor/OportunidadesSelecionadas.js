import Carousel, {consts} from 'react-elastic-carousel';
import Oportunidade from './Oportunidade'
import {useRef, Fragment} from 'react'
import styles from './FormPropor.module.css'
import chevron from '../../../../assets/img/chevron-right.svg'


const OportunidadesSelecionadas = ({data, handler}) => {


    const carouselOportunidades = useRef()

    return (
        <div style={{ marginTop: '10px' }}>
                    <h5 style={{padding:'0 10px'}}>Oportunidades selecionadas</h5>
                    <small style={{ fontSize: '9px',padding:'0 10px' }}>Resumo da(s) oportunidade(s) selecionada(s)</small>
                    <div>
                    {data.length > 0 ? <Fragment><Carousel 
                        itemsToShow={3}
                        pagination={true} 
                        showArrows={false} 
                        ref={carouselOportunidades} 
                        /* breakPoints={breakPoints} */
                        itemPosition={consts.START}
                        itemPadding={[10,10]}
                        renderPagination={({pages, activePage, onClick}) => {
                            return (
                                <div>
                                {pages.map(page => {
                                    const isActivePage = activePage === page 
                                    return(
                                        <span className={`${styles.dot} ${isActivePage ? styles.active : ""}`} key={page} onClick={() => onClick(page)}></span>
                                    )
                                }
                                )}
                                </div>
                            )
                        }}
                        >
                        {data.map(obj =>
                            <Oportunidade
                                key={obj.id}
                                tipoLead={obj.tipoLead}
                                nif={obj.Nif}
                                entidade={obj.NifDesc}
                                linhaNegocio={obj.LinhaNegocio}
                                estado={obj.EstadoProposta}
                                motivo={"motivo"}
                                sfid={obj.SFID}
                                id={obj.Id}
                                remove={handler}
                            />)}
                        </Carousel> <img src={chevron} style={{ width: '12px', position: 'absolute', right: '-25px', top: '85px', cursor: 'pointer' }} onClick={() => carouselOportunidades.current.slideNext()} alt=""/> </Fragment>: <p style={{marginTop:'10px', color:'red', fontSize:'10px', paddingLeft:'10px'}}>Sem oportunidades selecionadas...</p>}
                       
                    </div>
                </div>
    )
}
    


export default OportunidadesSelecionadas