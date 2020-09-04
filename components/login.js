import {useState} from 'react'

export default function Loginpage (){
    useState()={
        email: '',
        password:''
    }

    const [email, password]= useState()
    return(
        <form action="">
            <div>
                <label htmlFor="">username</label>
                <input type="text"
                value={email}/>
            </div>
            <div>
                <label htmlFor="">password</label>
                <input 
                value={password}
                type="password"/>
            </div>
            <button>Log In</button>
        </form>
    )
}