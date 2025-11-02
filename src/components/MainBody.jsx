

import {useState, useEffect} from 'react'
import TopBody from "./TopBody"
import BottomBody from "./BottomBody"

export default function MainBody (){

    const [userData , setUserData] = useState(null);
    const [newUser, setNewUser] = useState(0);

    useEffect(function(){
         fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => setUserData(data.results))
            .catch(err => console.log(err))
    }, [newUser]);

    function handleClickGenerator (){
        console.log("New User coming up...");
        setNewUser(prevUser => prevUser + 1)
        console.log("NewUser Value: ", newUser );
    }

    console.log(userData);
    

    return (
        <main 
        className="bg-white h-screen w-full md:w-2/3  mx-auto rounded-xl flex flex-col justify-center items-center">
            <TopBody userData={userData} newUser={newUser} />
            <hr className="text-gray-400 md:my-3"/>
            <BottomBody handleClickGenerator={handleClickGenerator} userData={userData} />
        </main>
    )
}

