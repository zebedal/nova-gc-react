import { useState, useEffect } from 'react'
import styles from './CriarProposta.module.css'
import Success from '../../../../UI/Success'
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import axios from 'axios'

const CriarProposta = ({ close, oportunidadesSelecionadas }) => {

    const [success, setSuccess] = useState(false)
    const [linhasNegocioSimulador, setLinhasNegocioSimulador] = useState([])
    const [listaContactos, setListaContactos] = useState([])
    const [listaSfids, setListaSfids] = useState([])

    const gridStyle = { minHeight: 130, marginTop: 10 }

    const columns = [

        {
            name: 'Id',
            header: 'Id',
            defaultWidth:80
            
        },
        {
            name: 'Nif',
            header: 'NIF',
            defaultWidth:90
        },
        {
            name: 'NifDesc',
            header: 'Entidade',
            defaultWidth:220
        },
        {
            name: 'LinhaNegocio',
            header: 'L. Negócio',
            defaultWidth:90
        },
        {
            name: 'linhaNegocioSimulador',
            header: 'L. Negócio Simulador',
            render: (valor) => {
               
                //filtrar das linhas de negócio do simulador a string da linha de negócio da oportunidade
                const filtered = linhasNegocioSimulador.filter(linha => linha.Lead === valor.data.LinhaNegocio)
                return (
                    <select style={{fontSize:'12px'}}>
                        {filtered.map((option, index) => <option key={index}>{option.PropostaShow}</option>)}
                    </select>
                )
            }
        },
        {
            name: 'EstadoProposta',
            header: 'Estado',
            
        },
        {
            name: 'SFID',
            header: 'SFID',
        },
    ]


    useEffect(() => {
        (async () => {
           const linhasNegocio =  axios.get('/data/linhasNegocioSimulador.json');
           const contactos =  axios.get('/data/getContactos.json');
           const sfids =  axios.get('/data/getSfids.json');
           Promise.all([linhasNegocio, contactos, sfids]).then(res => {
               setLinhasNegocioSimulador(res[0].data)
               setListaContactos(res[1].data)
               setListaSfids(res[2].data)
           })
       })();
       
   }, []);



    return (
        <div className={styles.wrapper}>

            <div>
                <h5>Criar Proposta</h5>
                <br />
                <div className={styles.wrapper}>
                    <form>
                        <p className={styles.subTitle}>Selecione o tipo de proposta a criar:</p>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>

                            <div>
                                <input type="radio" id="normal"
                                    name="radioGroup" value="normal" />
                                <label htmlFor="normal">Normal</label>
                            </div>

                            <div>
                                <input type="radio" id="grupo"
                                    name="radioGroup" value="grupo" />
                                <label htmlFor="grupo">Grupo económico</label>
                            </div>

                            <div>
                                <input type="radio" id="estado"
                                    name="radioGroup" value="estado" />
                                <label htmlFor="estado">Estado</label>
                            </div>

                        </div>
                    </form>
                    <br/>
                    <p className={styles.subTitle}>Confirme a(s) oportunidade(s) selecionada(s) e a linha de negócio de cada para criação de proposta no simulador</p>
                    <ReactDataGrid
                    style={gridStyle}
                    columns={columns}
                    dataSource={oportunidadesSelecionadas}
                    idProperty="id"
                    enableKeyboardNavigation={false}
                    rowHeight={30}
                    
                />
                </div>
                <br/>
                <br/>
                <div>
                    <p className={styles.subTitle}>Confirme o responsável para a proposta (ficará como owner da proposta em simulador)</p>
                    <select className={styles.formControl}>
                    {listaSfids.map(sfid => <option key={sfid.SFID}>{sfid.Description}</option>)}
                    </select>
                </div>
                <br/>
                <br/>
                <div>
                    <p className={styles.subTitle}>Escolha o contacto do cliente para a proposta (poderá criar um contacto novo se ainda não existir)</p>
                    <select className={styles.formControl}>
                        {listaContactos.map(contacto => <option key={contacto.ContactoId}>{contacto.Nome}</option>)}
                    </select>
                </div>

                <br />
                <div className={styles.flex}>
                    <div className={styles.Button} onClick={close}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" fill="#C20707" />
                            <path d="M5.27665 4.56953C5.08139 4.37426 4.7648 4.37426 4.56954 4.56953C4.37428 4.76479 4.37428 5.08137 4.56954 5.27663L5.27665 4.56953ZM11.3388 12.0459C11.534 12.2411 11.8506 12.2411 12.0459 12.0459C12.2411 11.8506 12.2411 11.534 12.0459 11.3388L11.3388 12.0459ZM4.56954 5.27663L11.3388 12.0459L12.0459 11.3388L5.27665 4.56953L4.56954 5.27663Z" fill="white" />
                            <path d="M4.56954 11.3388C4.37428 11.534 4.37428 11.8506 4.56954 12.0459C4.7648 12.2411 5.08139 12.2411 5.27665 12.0459L4.56954 11.3388ZM12.0459 5.27663C12.2411 5.08137 12.2411 4.76478 12.0459 4.56952C11.8506 4.37426 11.534 4.37426 11.3388 4.56952L12.0459 5.27663ZM5.27665 12.0459L12.0459 5.27663L11.3388 4.56952L4.56954 11.3388L5.27665 12.0459Z" fill="white" />
                        </svg>
                        <span>Cancelar</span>
                    </div>

                    <div className={styles.Button} >
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
}
export default CriarProposta