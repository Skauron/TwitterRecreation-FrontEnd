import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();

  const changepassword = () => {
    axios.put(
      "http://localhost:3001/auth/changepassword",
      {
        oldpassword: oldPassword,
        newpassword: newPassword,
      },
      {
        headers: { accessToken: localStorage.getItem("accessToken") },
      }
    ).then((response) => {
        if(response.data.error){
            alert(response.data.error);
        }else{
            navigate(`/`);
        }
    });
  };
  return (
    <div>
      <h1>Change your password</h1>
      <input
        type="text"
        placeholder="Old password..."
        onChange={(event) => {
          setOldPassword(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="New password..."
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
      />
      <button onClick={changepassword}>Save Changes</button>
    </div>
  );
}

export default ChangePassword;
