import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'

// type ErrorModalProps = {
//   title: string
//   message: string
//   onConfirm: any

// }
const ErrorModal = (props: any) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
