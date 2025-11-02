

import {useEffect, useState} from "react"
import profile from "/image/user.png"

export default function TopBody (props){

    const {userData, newUser} = props   

    return (
        <section className=" border-amber-600 w-full h-[530px] md:h-full overflow-hidden rounded-t-xl  mb-2 ">
            <div className="w-full h-[80px] md:h-[90px] bg-[#004d4d]"></div>

            {userData && userData.map (item => {
                return(
                    <div className="w-full md:h-[50%]" key={item.login.uuid}>
                        <div className="w-22 h-22 md:w-36 md:h-36 rounded-full border-4 border-white -mt-16 mx-auto overflow-hidden bg-gray-300 flex justify-center items-center ">
                            <img src={ item.picture.large ? item.picture.large:profile} alt="user profile image" className="w-full h-full object-cover object-center" />
                        </div>

                        <div>
                            <div className="flex flex-col justify-center items-center mb-2 ">
                                <h1 className="text-2xl md:text-3xl font-semibold ">
                                    <span>{item.name.first ? item.name.first: "Felix"}</span> <span>{item.name.last ? item.name.last: "Edwards"}</span>
                                </h1> 
                                <h5 className="text-md md:text-lg font-extralight text-gray-400">Digital Creative & Enthusiast</h5>
                            </div>

                            <div className="flex flex-col gap-4" >
                                <div className="holder">
                                    <i className="fa-regular fa-envelope"></i>
                                    <p className="">{item.email ? item.email : "eik.bodin@example.com"}</p>
                                </div>
                                <div className="holder">
                                    <i className="fa-solid fa-phone"></i>
                                    <p>{item.phone ? item.phone : "(123) 456-7890"}</p>
                                </div>
                                <div className="holder top-address">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>{item.location ? item.location.street.number + " " + item.location.street.name + ", " + item.location.city + ", " + item.location.state + ", " + item.location.postcode : "1234 Street Name, City, State, 12345"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </section>
    )
}


