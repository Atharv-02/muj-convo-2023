import React, { useState } from "react";
import questions from "./questions";
import {
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const FeedBackForm = ({ setFeedback }) => {
  const { token, setToken, isuserloggedin, setIsuserloggedin, role, setRole } =
    useAuth();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(questions);
  console.log(data);
  const handleChange = (e) => {
    console.log(e.target.name);
    const c = data.map((ques, index) => {
      if (index == e.target.name) {
        return { ...ques, ans: e.target.value };
      } else {
        return { ...ques };
      }
    });
    console.log(c);
    setData(c);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://us-central1-muj-convocation-2023.cloudfunctions.net/app/feedback/submit-feedback",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setFeedback(true);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(data);
  return (
    <FormGroup>
      <h2 style={{ textAlign: "center" }}>Feedback Form</h2>
      <form>
        <div>
          {questions.map((ques, index) => {
            return (
              <>
                <div className='ques-div' key={index}>
                  <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                    {index + 1}
                    {". "}
                    {ques.ques}
                  </p>
                  {ques.type === "radio" ? (
                    <>
                      <FormControl>
                        <FormLabel id='demo-row-radio-buttons-group-label'>
                          Answer
                        </FormLabel>
                        <RadioGroup
                          required
                          row
                          aria-labelledby='demo-row-radio-buttons-group-label'
                          name={index}
                          value={data[index].ans}
                          onChange={handleChange}
                          defaultValue={
                            ques.enum[parseInt(ques.enum.length / 2)]
                          }
                        >
                          {ques.enum.map((opt, i) => (
                            <FormControlLabel
                              key={i}
                              value={opt}
                              control={<Radio />}
                              id={i}
                              label={opt}
                            />
                          ))}
                        </RadioGroup>
                      </FormControl>
                    </>
                  ) : (
                    <TextField
                      fullWidth
                      required
                      name={index}
                      variant='outlined'
                      type={ques.type}
                      value={data[index].ans}
                      onChange={handleChange}
                      placeholder='Answer'
                      label='Required'
                    />
                  )}
                </div>
              </>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              backgroundColor: "black",
              color: "#fff",
              fontWeight: "bold",
            }}
            variant='contained'
            type='submit'
            onClick={handleSubmit}
          >
            <span style={{ fontSize: "1.1rem" }}>
              {loading ? "Loading..." : "Submit"}
            </span>
          </Button>
        </div>
      </form>
    </FormGroup>
  );
};

export default FeedBackForm;
