import React from "react";
import DataTable from 'react-data-table-component';
import "./styles.scss";

const App = ({columns=[], data=[]}) => {
	
   return <DataTable
			columns={columns}
			data={data}
		/>;
};

export default App;