import React ,{useState,useEffect} from 'react'
import   axios from 'axios';
import User from './User';
import './userlist.css';


const UserList = () => {
    const [persons, setPersons] = useState([]); // where to store the returned data
 const [error, setError] = useState("ERROR"); // where to store the coming errors
 
 
 useEffect(() => {


    const apiUrl ="https://jsonplaceholder.typicode.com/users";

    axios.get(apiUrl)
    .then(res => {
      const persons = res.data;
      setPersons( persons );
      console.log(persons)
    })

//     .then(function (response) {
//       // handle success
//    setData(response.data) 
//    console.log(data)

//    })
//     .catch(function (error) {
//       // handle error
//    setError(error) 
//    console.log(error)})


  }, [])


 

    return (
        <div className="list">
     
      { persons.map(el => (
          <ul>
         <User contact={el} /> </ul>
       )) }
   
    
     



 

     
   </div>
    )
}

export default UserList


