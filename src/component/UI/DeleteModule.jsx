import styles from './ErrorModule.module.css'
import Card from './Card'
import Button from './Button'
import style from './Button.module.css'

function DeleteModule(props){

console.log(props.id)

    return <div className={styles.backdrop} onClick={props.onConfirm}  >
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}Invalid Text </h2>
        </header>
        <div className={styles.content}>
            <p>{props.message} Do you Wont delete?</p>
            <p>{props.text}</p>
        </div>
        <footer className={styles.actions}>
        <button className={style.button} id={props.id} onClick={ props.onText }>YES</button>
        <button className={style.button}>NO</button>
        </footer>
    </Card>
    </div>
}
export default DeleteModule