import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './users.css';
import UserCard from '../UserCard/UserCard';
import {Link} from 'react-router-dom';

const Users = () => {
    const [users, setUsers]=useState([]);


    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response=>setUsers(response.data))
    },[])
    
   
    return (
        <div class='users'>
           
           {users.map(user=>(<Link to={`./users/${user.id}`}><UserCard user={user} key={user.id}/></Link>))}
           

        </div>
    );
}

export default Users;
