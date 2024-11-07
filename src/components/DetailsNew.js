import React, { useEffect, useState } from "react";
import LOGO_NEW from "../assets/Logo for convo portal without bg.png";
import { useAlert } from "../context/AlertMessageContext";
import Alerts from "./Alert";


const DetailsNew = ({ singleUser }) => {
    const [open, setOpen] = useState(false);
    const { message, setMessage } = useAlert();

    useEffect(() => {
        setTimeout(() => setOpen(false), 3000);
    }, [open]);



    return (
        <div className='dash-main-left'>
            {open ? <Alerts variant={"success"} /> : null}
            <div className='dash-left-div'>
                <h2 className='dash-details-head '>Student Details</h2>
                <div className='table-responsive dash-table-div'>
                    <table className='dash-deet-table table table-striped table-borderless'>
                        <tbody>
                            <tr className='table-dark'>
                                <th scope='col'>Field</th>
                                <th scope='col'>Details</th>
                            </tr>
                            <tr>
                                <th>Faculty</th>
                                <td>{singleUser.faculty}</td>
                            </tr>
                            <tr>
                                <th>School</th>
                                <td>{singleUser.school}</td>
                            </tr>
                            <tr>
                                <th>Program</th>
                                <td>{singleUser.programme}</td>
                            </tr>
                            <tr>
                                <th>Registration No</th>
                                <td>{singleUser.reg_no}</td>
                            </tr>
                            <tr>
                                <th>Student Name</th>
                                <td>{singleUser.student_name}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{singleUser.gender}</td>
                            </tr>
                            <tr>
                                <th>Batch</th>
                                <td>{singleUser.batch}</td>
                            </tr>
                            <tr>
                                <th>Credits</th>
                                <td>{singleUser.credits}</td>
                            </tr>
                            <tr>
                                <th>GPA</th>
                                <td>{singleUser.cgpa == 0 ? "NA" : singleUser.cgpa}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{singleUser.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <img src={LOGO_NEW} alt='' className='LOGONEW' />
                </div>



            </div>
        </div>
    );
};

export default DetailsNew;
