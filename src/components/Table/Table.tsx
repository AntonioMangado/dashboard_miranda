import React from "react";
import { StyledTable } from "../../styledComponents/StyledTable";
import { TCols, TableData, RowData } from "../../../lib/types";

interface TableProps {
  cols: TCols[];
  data: TableData;
}

const Table = ({cols, data}: TableProps) => {

  const displayRows = (row: RowData, i: number) => {
    return (
      <tr key={i}>
        {cols.map((col, i) => 
          <td key={i}>
            {col.display ? col.display(row) : row[col.property]}
          </td>
        )}
      </tr>
    )
  }
  return (
  <StyledTable>
    <thead>
      <tr>
        {cols.map((col, i) => <th key={i}>{col.label}</th>)}
      </tr>
    </thead>
    <tbody>
        {data.map(displayRows)}
    </tbody>
  </StyledTable>
  );
};

export default Table;
