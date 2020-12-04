import React from 'react'
import SideBar from '../components/SideBar'

export const CheckInfo = ({pathname}) => {
    
    console.log(pathname)
    return (
        <div>
            <SideBar pathname={pathname} />
            <div className="display-main text-center info-container">
                <h1> Your Info!</h1>
                <div>
                    <section>
                        <div>
                            <p>first Name:</p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Last Name:</p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Email:</p>

                        </div>
                    </section>
                    <section>
                        <div>
                            <p>Password</p>

                        </div>
                    </section>
                </div>
                
            </div>
        </div>
    )
}
