import Card from "../UI/Card"
import styles from './UserList.module.css'
import { useState } from "react"
import DeleteModule from "../UI/DeleteModule"
import style from '../UI/Button.module.css'
 
const UserList=(props)=>{
const [text, setText] = useState(false)
 
function onText(e){
   props.onSetRes(
    props.users.filter((el) => {
        if(el.id !== e.target.id){
            return;
        }
    })
   )
}


const errorhendler=()=>{
    setText(null)
}
 
    return(
        <Card className={styles.users} >
         {/* {console.log(text.title)} */}
          <ul>
              {props.users.map((user)=> (
               
                  <li key={user.id}  >
                      {user.name} {user.age} <span className={style.span}>years old</span> 
         {text && <DeleteModule   onConfirm={errorhendler} onText={onText} id={user.id}/>}
          
           <button className={style.button} onClick={()=>{
               setText(true)
           }}>delet</button>
                  </li>
              ))}

          </ul>
        </Card>
    )
}
export default UserList