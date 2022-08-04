import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'
// import { UsersListType } from './components/Users/UsersList'

// type UsersListType = {
//   uName: string
//   uAge: string
// }

function App() {
  const [usersList, setUsersList] = useState<any>([])

  const addUserHandler = (uName: string, uAge: number) => {
    setUsersList((prevUsersList: string | number | any) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  )
}

export default App
