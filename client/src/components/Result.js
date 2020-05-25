import React from "react";

function Result(props) {
  
  
  {/*function displayDate(date){
    const dArray = date.split("-");
    const year = dArray[0];
    const month = dArray[1];
    const dayArray = dArray[2].split("T");
    const day = dayArray[0];
    const fDate = [month,day,year].join("-");
  return fDate;*/}


  
  return (
    <table className='table'>
      <thead className='nav'>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          {/*<th>DOB</th>*/}
        </tr>
      </thead>
      <tbody>
        {
          props.result.map(person=>{
           return(
            <tr key={person.key}>
            
            <th className='col'>
              <img alt={person.firstName} src={person.picture} />
            </th>
            <td>
              {person.firstName} {person.lastName}
            </td>
            <td>{person.phone}</td>
            <td>{person.email}</td>
            
            <td>{person.dob}</td>
           
          </tr>
           )
          })
        }
        
      </tbody>
    </table>
  );

      }
export default Result;