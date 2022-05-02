import Button from './Button'
import Card from './Card'
import styles from './ErrorModule.module.css'

const ErrorModule=props=>{
    return <div className={styles.backdrop} onClick={props.onConfirm} >
    <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title} </h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
            <p>{props.text}</p>
        </div>
        <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </div>
}
export default ErrorModule

// fragment