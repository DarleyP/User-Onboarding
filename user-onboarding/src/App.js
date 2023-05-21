import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Form from './Form'
import schema from './formSchema';
import * as yup from 'yup'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] =useState(initialFormErrors);
  const [users, setUsers] = useState([])

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then( () => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }


  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then( res => {
      setUsers([ res.data, ...users])
    })
    .catch(err => console.error(err))
    .finally( () => setFormValues(initialFormValues))
  }

  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange} 
      submit={handleSubmit} 
      errors={formErrors}
      />
      {users.map( user => (
      <div  key={user.id}>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>{user.createdAt}</p>
        </div>
    ))}
    </div>
    
  );
}

export default App;
