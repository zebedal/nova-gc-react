
import ReactDataGrid from '@inovua/reactdatagrid-community'
import '@inovua/reactdatagrid-community/index.css'
import React,{ useState, useContext } from 'react'
import Button from '../UI/Button'
import NifSelector from '../../store/NifSelectorContext'

const columns = [
    /* { name: 'Id', header: 'Id', defaultVisible: true, type: 'number' }, */
    { name: 'NifGrupo', header: 'Nif Grupo', defaultWidth: 110, headerAlign: 'center', textAlign: 'center' },
    { name: 'NifGrupoDesc', header: 'Grupo', defaultWidth: 110, headerAlign: 'center', textAlign: 'center' },
    { name: 'Nif', header: 'NIF Entidade', defaultWidth: 110, headerAlign: 'center', textAlign: 'center' },
    { name: 'NifDesc', header: 'Entidade', headerAlign: 'center', textAlign: 'center' },
    { name: 'Responsavel', header: 'Responsável', headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalEstadoOps', header: 'Total', group: 'estado', headerAlign: 'center', textAlign: 'center', defaultWidth: 65, style: { background: '#485461', color: '#fff' } },
    { name: 'TotalEstadoIQ', header: 'I&Q', group: 'estado', headerAlign: 'center', textAlign: 'center', defaultWidth: 65 },
    { name: 'TotalEstadoPN', header: 'P&N', group: 'estado', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalEstadoF', header: 'F', group: 'estado', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalRefidelizaçao', header: 'Total', group: 'refidelizacao', headerAlign: 'center', textAlign: 'center', defaultWidth: 65, style: { background: '#485461', color: '#fff' } },
    { name: 'TotalRefidelizacaoVM', header: 'VM', group: 'refidelizacao', defaultWidth: 65, textAlign: 'center', },
    { name: 'TotalRefidelizacaoDM', header: 'DM', group: 'refidelizacao', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalRefidelizacaoIOT', header: 'IOT', group: 'refidelizacao', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalRefidelizacaoFixo', header: 'FIXO', group: 'refidelizacao', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalNovaReceita', header: 'Total', group: 'novareceita', headerAlign: 'center', textAlign: 'center', defaultWidth: 65, style: { background: '#485461', color: '#fff' } },
    { name: 'TotalNovaReceitaVM', header: 'VM', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalNovaReceitaDM', header: 'DM', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalNovaReceitaIOT', header: 'IOT', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' },
    { name: 'TotalNovaReceitaFixo', header: 'FIXO', group: 'novareceita', defaultWidth: 65, headerAlign: 'center', textAlign: 'center' }
]

const groups = [
    { name: 'estado', header: 'Estado', headerAlign: 'center' },
    { name: 'refidelizacao', header: 'Refidelização', headerAlign: 'center', group: 'tipo' },
    { name: 'novareceita', header: 'Nova Receita', headerAlign: 'center', group: 'tipo' },
    { name: 'tipo', header: 'Tipo', headerAlign: 'center' },
]

const filterValue = [
    { name: 'NifGrupo', operator: 'startsWith', type: 'string', value: '' },
    { name: 'NifGrupoDesc', operator: 'startsWith', type: 'string', value: '' },
    { name: 'Responsavel', operator: 'startsWith', type: 'string', value: '' },
    { name: 'Nif', operator: 'startsWith', type: 'string', value: '' },
    { name: 'NifDesc', operator: 'startsWith', type: 'string', value: '' },
];

const Tables = ({ data }) => {

    const [dataSource, setDataSource] = useState(data)
    const [gridRef, setGridRef] = useState(null);
    const [selected, setSelected] = useState(false)

    const smallWindow = window.innerHeight < 920

    const {nif, setNif} = useContext(NifSelector)

    if(nif.length === 0 && gridRef) { 
        if(selected) {
            gridRef.current.deselectAll()
            setSelected(false)
        }      
     }

    const gridStyle = { height: smallWindow ? '300px' : '400px' }


    const handleExport = () => {
        const columns = gridRef.current.visibleColumns;

        const header = columns.map((c) => c.name).join(',');
        const rows = gridRef.current.data.map((data) => columns.map((c) => data[c.id]).join(','));

        const contents = [header].concat(rows).join('\n');
        const blob = new Blob([contents], { type: 'text/csv;charset=utf-8;' });

        downloadBlob(blob);
    }

    const downloadBlob = (blob, fileName = 'grid-data.csv') => {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.position = 'absolute';
        link.style.visibility = 'hidden';

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    const handleRowSelection = (data) => {
        setNif(Object.keys(data.selected))
        setSelected(true) 
    }


    return (
        <div>

            <p>As oportunidades de negócio em cada entidade.</p>
        
         
            <ReactDataGrid
                onReady={setGridRef}
                /* handle={test} */
                style={gridStyle}
                columns={columns}
                defaultFilterValue={filterValue}
                dataSource={dataSource}
                groups={groups}
                checkboxColumn={true}
                checkboxOnlyRowSelect={true}
                onSelectionChange={handleRowSelection}
                idProperty="Nif"
                enableKeyboardNavigation={false}
                pagination="local"
                defaultLimit={smallWindow ? 6 : 10}
          
            />
            <Button text="Exportar" backgroundColor="#c20707" marginTop="30" click={handleExport} />
            
        </div>
    )

}

export default React.memo(Tables)