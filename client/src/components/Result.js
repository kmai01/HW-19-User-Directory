import React from "react";

function Result(props) {
  return (
    <table className='table'>
      <thead className='nav'>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          props.result.map(item=>{
           return(
            <tr key={item.key}>
            
            <th className='col'>
              <img alt={item.firstName} src={item.picture} />
            </th>
            <td>
              {item.firstName} {item.lastName}
            </td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
           )
          })
        }
        
      </tbody>
    </table>
  );
}

export default Result;