import { Fragment } from "react"

const qlikObj = [
	{
		id: "QV_ServicosvsContratos",
		qlikId: "eQbdsN",
	},{
		id: "QV_ContratosPermanenciaDetalheServicos",
		qlikId: "pKPvWZa",
	},{
		id: "QV_AnalisemensalTab",
		qlikId: "RjtGph",
	},{
		id: "QV_PerfilcomunicacoesTab",
		qlikId: "RqsqLcE",
	},{
		id: "QV_PropostasAberto",
		qlikId: "Jmmmw",
	},{
		id: "QV_OportunidadesNegocioPCC",
		qlikId: "VwjeYf",
	},{
		id: "QV_OportunidadesNegocioCVMTCV",
		qlikId: "DhKYrKJ",
	},{
		id: "QV_PedidosQuestoesAdministrativas",
		qlikId: "WFASj",
	},{
		id: "QV_Reclamacoes",
		qlikId: "jPHBjn",
	},{
		id: "QV_Concorrencia",
		qlikId: "DjPqBXr",
	}
];

const DetailsContent = props => {

	const box = {
        flex: '1 45%',
        height:'250px'
    }

	if(window.appFichaEntidade !== undefined){
		qlikObj.forEach((item) => {
			window.appFichaEntidade.getObject(item.id, item.qlikId);
		})
	}

	return (
		<Fragment>
			<div style={{display: 'flex', gap:'20px', position:'relative', flexWrap:'wrap', marginTop:'10px'}}>

				{/* <span class="TitleTab rowmarginborderRed">O Cliente na Vodafone</span> */}

				<div style={box} id="QV_ServicosvsContratos"></div>
				<div style={box} id="QV_ContratosPermanenciaDetalheServicos"></div>
				<div style={box} id="QV_AnalisemensalTab"></div>
				<div style={box} id="QV_PerfilcomunicacoesTab"></div>

				{/* <span class="TitleTab rowmarginborderRed">Oportunidades de Negócio</span> */}

				<div style={box} id="QV_OportunidadesNegocioCVMTCV"></div>
				<div style={box} id="QV_PropostasAberto"></div>
				<div style={box} id="QV_OportunidadesNegocioPCC"></div>
				

				{/* <span class="TitleTab rowmarginborderRed">Outros</span> */}

				<div style={box} id="QV_Reclamacoes"></div>
				<div style={box} id="QV_PedidosQuestoesAdministrativas"></div>
				<div style={box} id="QV_Concorrencia"></div>
			
				{/* <div style={box} id="QV01"></div>
				<div style={box} id="QV02"></div>
				<div style={box} id="QV03"></div>
				<div style={box} id="QV04"></div>
				<div style={{height: '250px', width: '100%'}} id="QV05"></div>
				<div style={{height: '250px', width: '100%'}} id="QV06"></div> */}
			</div>
		</Fragment>
	)
}

export default DetailsContent