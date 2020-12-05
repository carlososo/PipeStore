import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import fetchData from '../utils/fetchData';




export const CheckInfo = ({pathname}) => {

    const token = localStorage.getItem("tkn");
    const [user, setUser] = useState({})

    useEffect(() => {
        const responseUser =async()=>{
            try{
        const {data} = await fetchData.get("/api/v1/user/me",{
            headers:{
                Authorization: `JWT ${token}`
            }
        })
            const {user} = data
            setUser(user)
        }catch(err){
           console.log(err) 
        }
        
    }
    responseUser()    
    }, [token])

    const {first_name, last_name, email, gender, birth_date }= user;
    const parsedBirthDate = birth_date?.slice(0,10)
    
    
    return (
        <div>
            <SideBar active={"checkinfo"} pathname={pathname} />
            <div className="display-main text-center info-container">
                <h1> Your Info!</h1>
                <div>
                    <section>
                        <div>
                            <p>first Name: {first_name} </p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Last Name: {last_name}</p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Email: {email}</p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Gender:  {gender}</p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Birth Date: {parsedBirthDate} </p>

                        </div>
                    </section>
                </div>
                
            </div>
        </div>
    )
}
