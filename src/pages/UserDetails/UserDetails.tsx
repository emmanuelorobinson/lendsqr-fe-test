import "./UserDetails.scss";
import React, { useState, useEffect } from "react";

import { User, getUserById } from "../../utils/localStorage";
import { Link, useParams } from "react-router-dom";

import Header from "../../components/UserDetails/Header/Header";
import Body from "../../components/UserDetails/Body/Body";

import BackArrow from "../../assets/svgs/BackArrow.svg";

const UserDetails = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams();

  let initUser: User;

  useEffect(() => {
    getUser(Number(id));
  }, [id]);

  const getUser = async (id: number) => {
    const localUser = await getUserById(id);

    initUser = localUser;
    setUser(localUser);
  };

  return (
    <div className="details-box">
      <Link to={"/users"} className="user-nav">
        <div className="nav-inner">
          <img src={BackArrow} alt="" />
          <p>Back to Users</p>
        </div>
      </Link>
      <div className="details-heading">
        <div>
          <h2>User Details</h2>
        </div>
        <div>
          <button className="button__red">Blacklist User</button>
          <button className="button__blue">Activate User</button>
        </div>
      </div>
      <div>
        <Header user={user} />
      </div>
      <div>
        <Body user={user} />
      </div>
    </div>
  );
};

export default UserDetails;
