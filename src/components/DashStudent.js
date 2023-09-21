import React, { useState, useEffect } from "react";
import "../style/dashboard.css";
import vector from "../assets/Vector.svg";
import Details from "./Details";
import CommForm from "./CommForm";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Feedback from "../pages/Feedback";
import SavedDetails from "./SavedDetails";
import EditDetailsForm from "./EditDetailsform";
const DashStudent = ({ singleUser, setSingleUser }) => {
  const [editForm, setEditForm] = useState(false);
  return (
    <>
      {!singleUser.feedbackGiven ? (
        <Feedback />
      ) : editForm ? (
        <EditDetailsForm
          singleUser={singleUser}
          editForm={editForm}
          setEditForm={setEditForm}
        />
      ) : (
        <>
          <div className='dash-layer'>
            <div className='dash-super'>
              <div className='dash-mainy'>
                <Details
                  singleUser={singleUser}
                  setSingleUser={setSingleUser}
                />
                {singleUser.phone ? (
                  <SavedDetails
                    singleUser={singleUser}
                    setSingleUser={setSingleUser}
                    editForm={editForm}
                    setEditForm={setEditForm}
                  />
                ) : (
                  <CommForm
                    singleUser={singleUser}
                    setSingleUser={setSingleUser}
                  />
                )}
              </div>
            </div>
            <img src={vector} alt='' className='dash-vector' />
          </div>
        </>
      )}
    </>
  );
};

export default DashStudent;
