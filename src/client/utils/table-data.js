import { COLUMN_HEADING, NO_OF_COLUMNS_AND_ROWS } from "../constants/table-data";

export const getColumns =  () => {
let allColumns=[];

for(let i=0; i< NO_OF_COLUMNS_AND_ROWS;i++){
	allColumns.push(
		{
			name: `${COLUMN_HEADING}${i}`,
			selector: row => row[`${COLUMN_HEADING.toLowerCase()}${i}`]
		}
	);
}

return allColumns;
};

export const getData = () => {

	const getSingleRow=(rowIndex)=>{
		let singleRow={};
		for(let i=0; i< NO_OF_COLUMNS_AND_ROWS;i++){
			singleRow={
				...singleRow,
				[`${COLUMN_HEADING.toLowerCase()}${i}`]: `${rowIndex}Beetlejuice${i}`
			}
		}
		return singleRow;
	}
   
	let allRows=[];

for(let i=0; i< NO_OF_COLUMNS_AND_ROWS;i++){
	allRows.push(
		{
			id: i,
			...getSingleRow(i)
		}
	);
}

return allRows;
};