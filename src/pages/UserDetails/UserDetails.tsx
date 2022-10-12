import React, { useState, useEffect } from "react";

import { User, getUserById } from "../../utils/localStorage";
import {Link, useParams } from "react-router-dom";

import Header from "../../components/UserDetails/Header/Header";
import Body from "../../components/UserDetails/Body/Body";



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

  return <div>
    <Link to={"/users"}>
    <div>
      <p>Back to Users</p>
    </div>
    </Link>
    <div>
      <div>
        <h2>User Details</h2>
      </div>
      <div>
        <button>Blacklist User</button>
        <button>Activate User</button>
      </div>
    </div>
    <div>
      <Header user={user} />
    </div>
    <div>
      <Body user={user} />
    </div>
  </div>;
};

export default UserDetails;
