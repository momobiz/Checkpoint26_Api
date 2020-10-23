import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './userDescription.css';

const UserDescription = ({match}) => {
    
    const [description, setDescription]=useState({});
     const url='https://jsonplaceholder.typicode.com/users/?id='+match.params.id;
    
    useEffect(()=>{
            axios.get(url)
            .then(response=>setDescription(response.data[0]));
    },[]);
   const company={...description.company};
   const adress={...description.address};
console.log(adress);
   


    return (
         <div className="userDetails"> 
            <h2> More details about user's plateform </h2>
            
               
            <table class="table" style={{marginTop:'100px'}}>
  <thead>
    <tr>
      
      <th> Name</th>
      <th> Email</th>
      <th> Phone</th>
      <th> Website</th>
      <th> Company</th>
      <th> Address</th>

    </tr>
  </thead>
  <tbody>
    <tr className="table-primary">
      
      <td>{description.name}</td>
      <td>{description.email}</td>
      <td>{description.phone}</td>
      <td>{description.website}</td>
      <td>{company.name} <br/> operating in <br/> {company.bs}</td>
      <td>{adress.street} street, N° {adress.suite}<br/> {adress.city} city <br/> ZipCode: {adress.zipcode}  </td>
    </tr>
    
  </tbody>
</table>
        
        </div>
       
            
        
    );
}

export default UserDescription;
