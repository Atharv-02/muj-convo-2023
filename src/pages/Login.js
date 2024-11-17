import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/login.css";
import curve from "../assets/Vector-curve.png";
import img1 from "../assets/Photo_for_portal/DSC_0215.JPG";
import img2 from "../assets/Photo_for_portal/DSC_0223.JPG";
import img3 from "../assets/Photo_for_portal/DSC_0272.JPG";
import img4 from "../assets/Photo_for_portal/DSC_0278.JPG";
import img5 from "../assets/Photo_for_portal/DSC_0384.JPG";
import img6 from "../assets/Photo_for_portal/DSC_0697.JPG";
import img7 from "../assets/Photo_for_portal/DSC_0698.JPG";
import img8 from "../assets/Photo_for_portal/DSC_6841.JPG";
import img9 from "../assets/Photo_for_portal/DSC_6900.JPG";

import img10 from "../assets/Photo_for_portal/DSC01587.JPG";
import img11 from "../assets/Photo_for_portal/DSC01675.JPG";
import img12 from "../assets/Photo_for_portal/DSC01695.JPG";
import img13 from "../assets/Photo_for_portal/DSC01716.JPG";

import img14 from "../assets/Photo_for_portal/IMG_8057.JPG";
import img15 from "../assets/Photo_for_portal/IMG_8058.JPG";
import img16 from "../assets/Photo_for_portal/IMG_8098.JPG";
import img17 from "../assets/Photo_for_portal/IMG_8129.JPG";
import img18 from "../assets/Photo_for_portal/IMG_8153.JPG";
import img19 from "../assets/Photo_for_portal/IMG_8170.JPG";
import img20 from "../assets/Photo_for_portal/IMG_8200.JPG";
import img21 from "../assets/Photo_for_portal/IMG_8203.JPG";
import img22 from "../assets/Photo_for_portal/IMG_8289.JPG";
import img23 from "../assets/Photo_for_portal/IMG_8298.JPG";
import img24 from "../assets/Photo_for_portal/IMG_8307.JPG";
import img25 from "../assets/Photo_for_portal/IMG_8353.JPG";

import img26 from "../assets/Photo_for_portal/KRN05336.JPG";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLoading } from "../context/SideContext";
import { Alert } from "react-bootstrap";
import { useAlert } from "../context/AlertMessageContext";
import Alerts from "../components/Alert";

import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const { message, setMessage } = useAlert();
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("danger");
  const navigate = useNavigate();
  const [roles, setRoles] = useState("student");
  const [email, setEmail] = useState("");
  const [regNo, setRegNo] = useState("");
  const [newRegNo, setNewRegNo] = useState("");
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(false);
  const [alert, setAlert] = useState();
  const [showAlert, setShowAlert] = useState(false);
  // const [loading, setLoading] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const { token, setToken, isuserloggedin, setIsuserloggedin, role, setRole } =
    useAuth();
  const { loading, setLoading } = useLoading();
  // const { loading, setLoading } = useLoading();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let params;
    if (roles == "student") {
      params = { role: roles, reg_no: regNo, password: password };
    } else {
      params = { role: roles, email: email, password: password };
    }
    try {
      const result = await axios.post(
        "https://us-central1-muj-convocation-2024.cloudfunctions.net/app/auth/login",
        params
      );
      console.log(result);
      if (result.data.success) {
        const stringifieddata = JSON.stringify({
          loginstatus: true,
          clienttoken: result.data.token,
          loginRole: roles,
        });
        localStorage.setItem("login", stringifieddata);
      }
      setMessage("Logged In Successfully");
      setToken(result.data.token);
      setIsuserloggedin(true);
      setRole(roles);

      navigate("/");
    } catch (e) {
      setMessage(e.response.data.error);
      setVariant("danger");
      setOpen(true);
      console.log(e);
    }
    setLoading(false);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log("HI");
    try {
      const result = await axios.post(
        "https://us-central1-muj-convocation-2024.cloudfunctions.net/app/auth/register",
        {
          role: "student",
          reg_no: newRegNo,
        }
      );
      // console.log(result);
      setRegister(false);
      setOpen(true);
      setVariant("success");
      setMessage("Registered Successfully! Check email for login credentials");
      setNewRegNo("");
    } catch (error) {
      setOpen(true);
      setVariant("danger");
      setMessage(error.response.data.error);
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    localStorage.clear();
    setIsuserloggedin(false);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setOpen(false), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [open]);

  return (
    <>
      {open ? <Alerts variant={variant} /> : null}
      <div className='login-full'>
        <div className='carousel-login'>
          <Carousel
            responsive={responsive}
            showDots={false}
            arrows={false}
            autoPlay
            autoPlaySpeed={3000}
            infinite
            pauseOnHover={false}
          >
            <div>
              <img src={img1} alt='' />
            </div>
            <div>
              <img src={img2} alt='' />
            </div>
            <div>
              <img src={img3} alt='' />
            </div>
            <div>
              <img src={img4} alt='' />
            </div>
            <div>
              <img src={img5} alt='' />
            </div>
            <div>
              <img src={img6} alt='' />
            </div>
            <div>
              <img src={img7} alt='' />
            </div>
            <div>
              <img src={img10} alt='' />
            </div>
            <div>
              <img src={img11} alt='' />
            </div>
            <div>
              <img src={img12} alt='' />
            </div>
            <div>
              <img src={img13} alt='' />
            </div>
            <div>
              <img src={img14} alt='' />
            </div>
            <div>
              <img src={img17} alt='' />
            </div>
            <div>
              <img src={img18} alt='' />
            </div>
            <div>
              <img src={img19} alt='' />
            </div>
            <div>
              <img src={img22} alt='' />
            </div>
            <div>
              <img src={img24} alt='' />
            </div>
            <div>
              <img src={img25} alt='' />
            </div>
            <div>
              <img src={img26} alt='' />
            </div>
          </Carousel>
        </div>

        <div className='login-txt'>
          <div className='all-txt'>
            <h1 style={{ color: "green", fontSize: "2.2rem" }}>
              {/* todo color change and font bigger */}
              {/* Registrations are now Closed */}
              No Dues Submission is Now Open

            </h1>
            <p>Your passwords will be sent on the official e-mail id. </p>
            {!register ? (
              <>
                <form>
                  <div className='container'>
                    <select
                      name=''
                      id=''
                      value={roles}
                      onChange={(e) => setRoles(e.target.value)}
                    >
                      <option value='student'>Student</option>
                      <option value='department'>Department</option>
                    </select>
                  </div>
                  <div className='container'>
                    {roles == "student" ? (
                      <input
                        type='text'
                        placeholder='Registration No'
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                      />
                    ) : (
                      <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    )}
                  </div>
                  <div className='container'>
                    <input
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {loading ? (
                    <div
                      className='container sub-btn-container'
                      style={{ textAlign: "center", margin: "1.5rem auto" }}
                    >
                      <Spinner
                        animation='border'
                        role='status'
                        style={{
                          margin: "1.5rem auto",
                          font: "1.5rem",
                        }}
                      ></Spinner>
                    </div>
                  ) : (
                    <div className='container sub-btn-container'>
                      <button
                        className='btn-all login-btn'
                        type='submit'
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </form>
                <p
                  className='login-p'
                  onClick={() => {
                    setRegister(true);
                    setNewRegNo("");
                  }}
                >
                  Don’t have an account?
                  <span> Register Now</span>
                </p>
              </>
            ) : (
              <>
                <form>
                  <div className='container'>
                    <input
                      type='text'
                      placeholder='Registration No'
                      value={newRegNo}
                      onChange={(e) => setNewRegNo(e.target.value)}
                    />
                  </div>

                  {loading ? (
                    <div
                      className='container sub-btn-container'
                      style={{ textAlign: "center", margin: "1.5rem auto" }}
                    >
                      <Spinner
                        animation='border'
                        role='status'
                        style={{
                          margin: "1.5rem auto",
                          font: "1.5rem",
                        }}
                      ></Spinner>
                    </div>
                  ) : (
                    <div className='container sub-btn-container'>
                      <button
                        className='btn-all login-btn'
                        type='submit'
                        onClick={handleRegisterSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </form>
                <p
                  className='login-p'
                  onClick={() => {
                    setRegister(false);
                    setRegNo("");
                  }}
                >
                  Already have an account?
                  <span> Login Now</span>
                </p>
              </>
            )}
          </div>
        </div>
        <div className='wh-curve'>
          <img src={curve} alt='' className='curve' />
        </div>
      </div>
    </>
  );
};

export default Login;
