import "./Users.scss";

import React, { useState, useEffect } from "react";
import { User, setUsers } from "../../utils/localStorage";

import DashUser from "../../assets/svgs/DashUser.svg";
import DashActive from "../../assets/svgs/DashActive.svg";
import DashLoans from "../../assets/svgs/DashLoans.svg";
import DashSavings from "../../assets/svgs/DashSavings.svg";

import UserCard from "../../components/Cards/UserCard";



const Users = () => {
  const url =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/";

  // use interface User to create array of objects
  const [users, fillUsers] = useState<User[]>([]);



  useEffect(() => {

    const fetchUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
      fillUsers(data);
    };

    try {
      fetchUsers();
    } catch (error) {
      console.log(error);
    }


  }, []);



  return <div className="user-base">
    <h1>Users</h1>
    <div className="user-cards">
      <UserCard icon={DashUser} title={"users"} amount={"2,453"} ></UserCard>
      <UserCard icon={DashActive} title={"Active Users"} amount={"2,453"} ></UserCard>
      <UserCard icon={DashLoans} title={"Users with Loans"} amount={"2,453"} ></UserCard>
      <UserCard icon={DashSavings} title={"Users with Savings"} amount={"2,453"} ></UserCard>
    </div>
  </div>;
};

export default Users;
