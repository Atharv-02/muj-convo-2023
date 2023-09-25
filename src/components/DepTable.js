import React from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import Spinner from "react-bootstrap/Spinner";
const DepTable = ({ dues, setDues }) => {
  const { token } = useAuth();
  const clearDue = async (id) => {
    try {
      // const result = await axios.put(
      //   `https://us-central1-muj-convocation-2023.cloudfunctions.net/app/due/clear-student-due/${id}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `https://us-central1-muj-convocation-2023.cloudfunctions.net/app/due/clear-student-due/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.request(config).then((response) => {
        console.log(JSON.stringify(response.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='table'>
        <h1>All Dues</h1>
        <br />
        <div>
          <div>
            <table class='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Amount</th>
                  <th scope='col'>Details</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dues.map((due) => {
                  return (
                    <tr>
                      <td>{due.amount_due || "__"}</td>
                      <td>{due.details || "__"}</td>
                      <td>
                        {due.is_clear === undefined ? (
                          "__"
                        ) : due.is_clear ? (
                          "cleared"
                        ) : (
                          <button
                            style={{
                              cursor: "pointer",
                              backgroundColor: "green",
                              color: "white",
                              border: "none",
                              padding: "0.25rem 0.75rem",
                              borderRadius: "7px",
                            }}
                            onClick={() => clearDue(due._id)}
                          >
                            clear
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepTable;
