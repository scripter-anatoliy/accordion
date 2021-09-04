import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "UseMemo demo",
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsReactMemoExample1 = () => {
    console.log("HelpsReactMemoExample1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Tolya", "Tanya", "Maks", "Evgeniy"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUsers = () => {
        const newUsers = [...users, "Masha" + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUsers()}>addUsers</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["ReactJS", "JS", "CSS", "HTML"])

    const addBooks = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, "Angular" + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])
    const addBooks2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, "Angular" + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBooks={addBooks2}/>
    </>
}

export type BooksSecretType = {
    addBooks: () => void;
}

const BooksSecret = (props: BooksSecretType) => {
    return <div>
        <button onClick={() => props.addBooks()}>addUsers</button>
    </div>
}

const Book = React.memo(BooksSecret)