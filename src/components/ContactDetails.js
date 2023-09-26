import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import { BsMailbox } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
const ContactDetails = () => {
  return (
    <div className='contactBox'>
      <div className="contactHeader">
        <h3>Contact</h3>
      </div>
      <div className='AccordionBody'>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Email Related Queries</h6>
            </Accordion.Header>

            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:it.support@jaipur.manipal.edu'>
                  it.support@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Library Dues</h6>
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                Mr. Om Prakash Verma <br />
              </strong>
              Mob: 9828543435
              <br /> <BiMailSend />
              <span>
                Email :{" "}
                <a href='mailto:omprakash.verma@jaipur.manipal.edu'>
                  omprakash.verma@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Finance Dues</h6>
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                Ms Deepthi Rajeev
                <br />
              </strong>

              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:deepthi.rajeev@jaipur.manipal.edu'>
                  deepthi.rajeev@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='3'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Mess Dues:</h6>
            </Accordion.Header>
            <Accordion.Body>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='' style={{ color: "red" }}>
                  To be Updated Soon
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='4'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Hostel Dues</h6>
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                Mr. Ashish Dosaya <br />
              </strong>
              Mob: 9413749923 / 8976751015
              <br />
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:ashish.dosaya@goodhostspaces.com'>
                  ashish.dosaya@goodhostspaces.com
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='5'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For AMS/Academics Dues </h6>
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                Dr. Kusum Lata Jain <br />
              </strong>
              Mob: 9828133885
              <br />
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:kusumlata.jain@jaipur.manipal.edu'>
                  kusumlata.jain@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='6'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Sports Dues</h6>
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                Mr. Sanjeev Sharma <br />
              </strong>
              Mob: 9993308598
              <br />
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:sanjeev.sharma@jaipur.manipal.edu'>
                  sanjeev.sharma@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='7'>
            <Accordion.Header>
              <h6 style={{fontSize:"1.5rem"}}>For Exam cell related queries</h6>
            </Accordion.Header>
            <Accordion.Body>
              <strong>
                Mr. Bijendra Singhs
                <br />
              </strong>
              <BiMailSend />
              <span>
                Email:{" "}
                <a href='mailto:it.support@jaipur.manipal.edu'>
                  it.support@jaipur.manipal.edu
                </a>
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ContactDetails;
