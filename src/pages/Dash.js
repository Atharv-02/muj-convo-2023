import React, { useState, useEffect } from "react";
import DashStudent from "../components/DashStudent";
import DepDash from "../components/DepDash";
import { useAuth } from "../context/AuthContext";
import { useLoading } from "../context/SideContext";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";
const Dash = () => {
  const [singleUser, setSingleUser] = useState([]);
  const { token, setToken, isuserloggedin, setIsuserloggedin, role } =
    useAuth();
  const { loading, setLoading } = useLoading();
  async function getUsers() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/auth/getUser",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSingleUser(response.data.data);
      console.log(response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setIsuserloggedin(false);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  console.log(role);

  if (loading) {
    return (
      <Spinner
        animation='border'
        role='status'
        style={{ margin: "10rem auto" }}
      ></Spinner>
    );
  } else if (role == "student") {
    return (
      <DashStudent singleUser={singleUser} setSingleUser={setSingleUser} />
    );
  } else if (role == "department") {
    console.log("department");
    return <DepDash singleUser={singleUser} setSingleUser={setSingleUser} />;
  }
};

export default Dash;
