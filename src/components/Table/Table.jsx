import React from "react";
import { StyledTable } from "../../styledComponents/StyledTable";

const Table = ({cols, data}) => {

  const displayRows = (row, i) => {
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
