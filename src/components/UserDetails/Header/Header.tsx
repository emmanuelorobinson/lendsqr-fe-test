import "./Header.scss";

import React from "react";
import { User } from "../../../utils/localStorage";

import ImagePlaceholder from "../../../assets/svgs/ImagePlaceholder.svg";
import Stars from "../../../assets/svgs/Stars.svg";

interface Props {
  user: User | undefined;
}

const Header = ({ user }: Props) => {
  return (
    <div className="userdetail-header">
      <div className="header-info">
        <div className="header-content">
          {user?.profile.avatar ? (
            <img
              src={user?.profile.avatar}
              style={{
                width: "100px",
              }}
              alt=""
            />
          ) : (
            <img src={ImagePlaceholder} alt="profile" />
          )}
        </div>
        <div className="header-content">
          <h3>{`${user?.profile.firstName} ${user?.profile.lastName}`}</h3>
          <p>{user?.accountNumber}</p>
        </div>
        <div className="vr" />
        <div className="header-content">
          <h4>User's Tier</h4>
          <img src={Stars} alt="" />
        </div>
        <div className="vr" />
        <div className="header-content">
          <h3>
            {user?.profile.currency}
            {user?.accountBalance.toLocaleString("en-US", {
              style: "currency",
              currency: "NGN",
            })}
          </h3>
          <p>{user?.accountNumber}</p>
        </div>
      </div>
      <div className="header-nav">
        <p className="active">General Detials</p>
        <p>Documents</p>
        <p>Bank Details</p>
        <p>Loans</p>
        <p>Savings</p>
        <p>App and System</p>
      </div>
    </div>
  );
};

export default Header;
