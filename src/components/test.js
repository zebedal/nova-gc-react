import React, { useState, useRef } from 'react';

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';

import Button from '@inovua/reactdatagrid-community/packages/Button';
import TextInput from './components/TextInput';

import people from './people';
import flags from './flags';

const gridStyle = { minHeight: 400 };

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

const SEPARATOR = ',';

const shouldComponentUpdate = () => true;

const App = () => {
  const [gridRef, setGridRef] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [dataSource, setDataSource] = useState(people);

  const searchTextRef = useRef(searchText);
  searchTextRef.current = searchText;

  const render = ({ value }) => {
    const lowerSearchText = searchTextRef.current.toLowerCase();
    if (!lowerSearchText) {
      return value;
    }
    const str = value + ''; // get string value
    const v = str.toLowerCase(); // our search is case insensitive
    const index = v.indexOf(lowerSearchText);

    if (index === -1) {
      return value;
    }

    return [
      <span key="before">{str.slice(0, index)}</span>,
      <span key="match" style={{ background: 'yellow', fontWeight: 'bold' }}>
        {str.slice(index, index + lowerSearchText.length)}
      </span>,
      <span key="after">{str.slice(index + lowerSearchText.length)}</span>,
    ];
  };

  const initialColumns = [
    {
      name: 'id',
      header: 'Id',
      defaultVisible: false,
      minWidth: 50,
      type: 'number',
      render,
      shouldComponentUpdate,
    },
    { name: 'name', header: 'Name', defaultFlex: 1, render, shouldComponentUpdate },
    {
      name: 'country',
      header: 'Country',
      defaultFlex: 1,
      minWidth: 100,
      render: ({ value }) => (flags[value] ? flags[value] : value),
      shouldComponentUpdate,
    },
    {
      name: 'city',
      header: 'City',
      defaultFlex: 1,
      minWidth: 100,
      render,
      shouldComponentUpdate,
    },
    { name: 'age', header: 'Age', minWidth: 80, type: 'number', render, shouldComponentUpdate },
  ];

  const [columns] = useState(initialColumns);

  const exportCSV = () => {
    const columns = gridRef.current.visibleColumns;

    const header = columns.map((c) => c.name).join(SEPARATOR);
    const rows = gridRef.current.data.map((data) => columns.map((c) => data[c.id]).join(SEPARATOR));

    const contents = [header].concat(rows).join('\n');
    const blob = new Blob([contents], { type: 'text/csv;charset=utf-8;' });

    downloadBlob(blob);
  };

  const onSearchChange = ({ target: { value } }) => {
    const visibleColumns = gridRef.current.visibleColumns;

    const lowerSearchText = value && value.toLowerCase();
    const newData = people.filter((p) => {
      return visibleColumns.reduce((acc, col) => {
        const v = (p[col.id] + '').toLowerCase(); // get string value
        return acc || v.indexOf(lowerSearchText) != -1; // make the search case insensitive
      }, false);
    });

    setSearchText(value);
    setDataSource(newData);
  };

  return (
    <div>
      <h3>Export to CSV - keep current sort and column order</h3>
      <p>
        Try and change the sorting and reorder or hide columns. The sort and column order will be
        reflected in the exported CSV file.
      </p>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <label>
          Search text:{' '}
          <TextInput
            type="text"
            style={{ padding: 5 }}
            value={searchText}
            onChange={onSearchChange}
          />{' '}
        </label>
      </div>
      <p>
        We also demo a search-box outside the grid. Use the search-box to filter out rows that do
        not contain the specified text. The CSV export will only contain the rows matching the
        search.
      </p>
      <ReactDataGrid
        handle={setGridRef}
        idProperty="id"
        style={gridStyle}
        columns={columns}
        dataSource={dataSource}
      />
      <Button style={{ marginTop: 20 }} onClick={exportCSV}>
        Export CSV
      </Button>
    </div>
  );
};

export default () => <App />;