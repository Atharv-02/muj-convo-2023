import React, { useState, useEffect } from "react";
import DetailsNew from "./DetailsNew";
import CommFormNew from "./CommFormNew";
import vector from "../assets/Vector.svg";
import Feedback from "../pages/Feedback";


const DashStudentNew = ({ singleUser, setSingleUser, getUsers }) => {
    const [feedback, setFeedback] = useState(singleUser.feedbackGiven);

    return (
        <>
            {!feedback ?
                (<Feedback setFeedback={setFeedback} />)
                : (
                    <div className='dash-layer'>
                        <div className='dash-super'>
                            <div className='dash-mainy'>
                                <DetailsNew
                                    singleUser={singleUser}
                                />
                                {singleUser.bank_address ? "Thank you for submitting details" :
                                    <CommFormNew
                                        singleUser={singleUser}
                                        setSingleUser={setSingleUser}
                                    />}
                            </div>
                        </div>
                        <img src={vector} alt='' className='dash-vector' />
                    </div>
                )
            }
        </>
    )
}

export default DashStudentNew