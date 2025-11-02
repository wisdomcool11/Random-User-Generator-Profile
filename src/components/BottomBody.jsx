

export default function BottomBody(props){

    const {handleClickGenerator, userData}= props;

    return (
        <section className="w-full h-full ">
            {userData && userData.map(item => {
                    return (
                        <div key={item.login.uuid} className="grid grid-cols-2 grid-rows-2 mb-2 p-2 gap-4 md:gap-2">
                            <div className="details">
                                <h2>Address</h2>
                                <p><span>Street: </span> {item.location ? item.location.street.number + " " + item.location.street.name + ", " + item.location.city + ", " + item.location.state : "N/A"}</p>
                                <p><span>Postcode: </span> {item.location?.postcode ?? "N/A"}</p>
                            </div>
                            <div className="details">
                                <h2>Account Details</h2>
                                <p><span>Username: </span> {item.login ? item.login.username : "N/A"}</p>
                                <p><span>Password: </span > ********</p>
                            </div>
                            <div className="details">
                                <h2>Personal Info</h2>
                                <p><span>Age: </span> {item.dob ?.age ?? "N/A"} (Born: {item.dob ?.date ?? "N/A"})</p>
                                <p><span>Gender: </span> {item.gender ?? "N/A"}</p>
                            </div>
                            <div className="details">
                                <h2>UUID </h2>  
                                <p>{item.login?.uuid ?? "N/A"}</p>
                                <p>3a193ed84d</p>
                            </div>

                            <button 
                                onClick={handleClickGenerator}
                                className="col-span-2 bg-[#004d4d] text-white 
                                py-2 rounded-md hover:bg-[#003333] transition-all
                                mt-4 active:translate-y-1" >
                                Generate New Profile
                            </button>
                        </div>

                    )
                })
            }
        </section>
    )
}



