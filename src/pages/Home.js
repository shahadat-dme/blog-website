import React,{ useState, useEffect } from 'react'
import {getDocs, collection} from "firebase/firestore"
import { db } from "../firebase.config"

function Home() {
    const [ postLists, setPostLists] = useState([]);
    const postsCollectionRef = collection(db,"posts")

    useEffect (() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            console.log(data)
        }
        getPosts();
    })
    return (
        <div className='homePage'>
            Home
        </div>
    )
}

export default Home
