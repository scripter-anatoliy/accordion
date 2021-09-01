import React, {useState} from "react";

export default {
    title: "React.Memo demo",
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Tolya", "Tanya", "Maks", "Evgeniy"])

    const addUsers = () => {
        const newUsers = [...users, "Masha" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={addUsers}>AddUsers</button>
    <NewMessageCounter count={counter}/>
    <Users users={users}/>
    </>
}