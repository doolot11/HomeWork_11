import Card from '../UI/Card'
import styles from './AddUser.module.css'
import Button from '../UI/Button'
import { useState } from 'react'
import ErrorModule from '../UI/ErrorModule'

const AddUser=props=>{
const [enteredUsername,setEnteredUsername] = useState('')
const [enteredAge, setEnteredAge] = useState('')
const [error, setError] = useState(false)

const addUserHandler = event=>{
event.preventDefault()
if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
    setError({
        title: 'invalid input',
        message: 'Please write something'
    })
 return;
}
if(+enteredAge<1){
    setError({
        title:'invalid input',
        message: "Please enter a valid age (+1)"
    })
    return;
}
if(click)

props.onAdduser(enteredUsername,enteredAge)
setEnteredUsername("")
setEnteredAge("")

}

const usernameChangeHandler = event=>{
    setEnteredUsername(event.target.value)
}

const ageChangeHendler = event=>{
    setEnteredAge(event.target.value)
}

const errorHandler =()=>{
  setError(null)
}

function click(){
    
}

return (<div>
        {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={styles.input}>
     <form action="" onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangeHendler} />
        <Button type='submit'>Add User </Button>
    </form>
</Card>
</div>
    )
}
export default AddUser