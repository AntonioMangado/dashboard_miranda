import React from "react";
import { StyledTable } from "../../styledComponents/StyledTable";

const Table = ({cols, data}) => {

  const displayRows = (row) => {
    return (
      <tr>
        {cols.map(col => 
          <td>
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
        {cols.map(col => <th>{col.label}</th>)}
      </tr>
    </thead>
    <tbody>
        {data.map(displayRows)}
    </tbody>
  </StyledTable>
  );
};

export default Table;
