import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props: any) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState<any | null>(null)

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(e.target.value)
  }

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: ' Invalid input',
        message: 'Please enter a valid name & age (non-empty values)',
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age ( > 0)',
      })
      return
    }
    // console.log(enteredUsername, enteredAge)
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const errorHandler = () => {
    setError(false)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={'error.title'}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            type='number'
            id='age'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
