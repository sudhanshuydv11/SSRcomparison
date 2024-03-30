import React from "react";
import DataTable from 'react-data-table-component';
import {getColumns, getData} from '../../utils/table-data'
import "./styles.scss";

const App = ({}) => {
 
	const columns = getColumns();

	const data = getData();

   return <DataTable
			columns={columns}
			data={data}
		/>;
};

export default App;