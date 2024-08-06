import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const CommForm = ({ singleUser, setSingleUser }) => {
  const { token } = useAuth();
  const [showBtn, setShowBtn] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    country: singleUser.country || "",
    phone: singleUser.phone || "",
    state: singleUser.state || "",
    city: singleUser.city || "",
    district: singleUser.district || "",
    address: singleUser.address || "",
    pincode: singleUser.pincode || "",
    account_holder_name: singleUser.account_holder_name || "",
    bank_address: singleUser.bank_address || "",
    account_number: singleUser.account_number || "",
    bank_name: singleUser.bank_name || "",
    branch_name: singleUser.branch_name || "",
    ifsc_code: singleUser.ifsc_code || "",
    aadhar_front_picture: singleUser.aadhar_front_picture || "",
    aadhar_back_picture: singleUser.aadhar_back_picture || "",
    cancel_check: singleUser.cancel_check || "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    let hasError = false;
    const newErrors = {};

    if (formSubmitted) {
      Object.keys(formData).forEach((key) => {
        if (!formData[key] && key !== "checked") {
          newErrors[key] = "This field is required";
          hasError = true;
        }
        if (key === "phone" && formData[key].length !== 10) {
          newErrors[key] = "Phone number must be 10 digits";
          hasError = true;
        }
      });
    }

    setErrors(newErrors);
    setShowBtn(!hasError);
  }, [formData, formSubmitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    let valid = true;
    const newErrors = {};
    let firstInvalidField = null;

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "checked") {
        newErrors[key] = "This field is required";
        valid = false;
        if (!firstInvalidField) {
          firstInvalidField = key;
        }
      }
      if (key === "phone" && formData[key].length !== 10) {
        newErrors[key] = "Phone number must be 10 digits";
        valid = false;
        if (!firstInvalidField) {
          firstInvalidField = key;
        }
      }
    });

    setErrors(newErrors);

    if (!valid) {
      document.getElementById(firstInvalidField).focus();
      return;
    }

    try {
      const response = await axios.post(
        "https://us-central1-muj-convocation-2024.cloudfunctions.net/app/auth/add-communication-data",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSingleUser(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const openCloudWidget = (value) => {
    window.cloudinary
      .createUploadWidget(
        {
          cloudName: "dldnrcfwz",
          uploadPreset: "neautqvj",
          resourceType: "image",
          maxFiles: 1,
          maxImageFileSize: 1500000,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log(result.event);
            if (
              result.info.secure_url.endsWith("jpg") ||
              result.info.secure_url.endsWith("jpeg") ||
              result.info.secure_url.endsWith("png")
            ) {
              if (value === "aadhar_front_picture") {
                setFormData({
                  ...formData,
                  aadhar_front_picture: result.info.secure_url,
                });
              } else if (value === "aadhar_back_picture") {
                setFormData({
                  ...formData,
                  aadhar_back_picture: result.info.secure_url,
                });
              } else if (value === "cancel_check") {
                setFormData({
                  ...formData,
                  cancel_check: result.info.secure_url,
                });
              }
              console.log(formData);
              // setFieldValue("photo", result.info.secure_url);
            } else {
              alert("Only jpg,jpeg and png formats accepted");
            }
          } else if (result.status == "Invalid image file") {
            alert("Please provide proper images in supported file types");
          } else {
            console.log(result);
          }
        }
      )
      .open();
  };

  return (
    <div className='right-div'>
      <form onSubmit={handleSubmit}>
        <div
          className='comm-div'
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Communication Details</h2>
          <div className='comm-inp-div'>
            {[
              {
                name: "phone",
                type: "number",
                placeholder: "Phone Number - 10 digits",
                min: "1000000000",
                max: "9999999999",
              },
              { name: "address", type: "text", placeholder: "Address" },
              { name: "city", type: "text", placeholder: "City" },
              { name: "state", type: "text", placeholder: "State" },
              { name: "pincode", type: "number", placeholder: "Pincode" },
              { name: "district", type: "text", placeholder: "District" },
              { name: "country", type: "text", placeholder: "Country" },
            ].map((field) => (
              <div key={field.name} className='comm-inp'>
                <input
                  name={field.name}
                  type={field.type}
                  className={`form-control ${
                    errors[field.name] ? "is-invalid" : ""
                  }`}
                  placeholder={field.placeholder}
                  id={field.name}
                  min={field.min}
                  max={field.max}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
                {errors[field.name] && (
                  <div className='invalid-feedback'>{errors[field.name]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='refund-div'>
          <h2 style={{ textAlign: "center" }}>
            Details for Caution <br /> Money Refund
          </h2>

          <div className='refund-inp-div'>
            {[
              {
                name: "account_holder_name",
                type: "text",
                placeholder: "Account Holder Name",
              },
              {
                name: "account_number",
                type: "text",
                placeholder: "Account Number",
              },
              { name: "bank_name", type: "text", placeholder: "Bank Name" },
              { name: "branch_name", type: "text", placeholder: "Bank Branch" },
              {
                name: "bank_address",
                type: "text",
                placeholder: "Bank Address",
              },
              { name: "ifsc_code", type: "text", placeholder: "IFSC Code" },
            ].map((field) => (
              <div key={field.name} className='refund-inp'>
                <input
                  name={field.name}
                  type={field.type}
                  className={`form-control ${
                    errors[field.name] ? "is-invalid" : ""
                  }`}
                  placeholder={field.placeholder}
                  id={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required
                />
                {errors[field.name] && (
                  <div className='invalid-feedback'>{errors[field.name]}</div>
                )}
              </div>
            ))}

            {[
              { name: "aadhar_front_picture", label: "Aadhar Front Picture" },
              { name: "aadhar_back_picture", label: "Aadhar Back Picture" },
              { name: "cancel_check", label: "Canceled Cheque Picture" },
            ].map((field) => (
              <div key={field.name} className='refund-inp input-group'>
                <div className='abs-red-txt'>
                  Only jpg, jpeg and png accepted
                </div>
                <label className='input-group-text' htmlFor={field.name}>
                  <strong>{field.label}</strong>
                </label>
                <input
                  className={`form-control ${
                    errors[field.name] ? "is-invalid" : ""
                  }`}
                  id={field.name}
                  placeholder={field.label}
                  required
                  readOnly
                  value={formData[field.name]}
                />
                <button
                  className='btn btn-outline-secondary'
                  type='button'
                  onClick={() => openCloudWidget(field.name)}
                >
                  Select Image
                </button>
                {errors[field.name] && (
                  <div className='invalid-feedback'>{errors[field.name]}</div>
                )}
              </div>
            ))}
          </div>

          <div className='save-btn'>
            <button
              className='btn btn-outline-dark'
              disabled={!showBtn}
              type='submit'
            >
              Save Details
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommForm;
