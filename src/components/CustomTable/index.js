import React from "react";
import DataTable from "react-data-table-component";
import '../../scss/library/table.scss'
function CustomTable({columns,data}) {
  return (
    <div className="custom-table">
     <DataTable
		columns={columns}
		data={data}
		pagination
        
	/>
    </div>
  );
}

export default CustomTable;
