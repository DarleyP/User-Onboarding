import React from "react";


const Form = (props) => {

const {change, submit, errors} = props;
const { username, email, password,tos} = props.values;

 const onChange =(evt) => {
    const { name, value, checked, type} = evt.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal)
}

const onSubmit = (evt) => {
    evt.preventDefault();
    submit()
}
    return (
        <div className="styled-form">
            <h1>My Log in Form</h1>
            <form onSubmit={onSubmit}>
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <label>
                    <input type="submit" value="Create a Friend"/>
                </label>
            </form>
            <div className="errors.div">
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.tos}</p>
            </div>
        </div>
    )
    
}
export default Form;