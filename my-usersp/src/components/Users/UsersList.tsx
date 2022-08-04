import React from 'react'
import Card from '../UI/Card'

import classes from './UsersList.module.css'

export type UsersListType = {
  name: string
  age: number
  id: string
}

const UsersList = (props: any) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: UsersListType) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
