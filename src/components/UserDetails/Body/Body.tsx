import "./Body.scss";
import React from "react";


import { User } from "../../../utils/localStorage";

interface Props {
  user: User | undefined;
}

const Body = ({ user }: Props) => {
  return (
    <div className="userinfo-box">
      <div className="content-box-wrapper">
        <h4>Personal Information</h4>
        <div className="content-box-outer">
          <div className="content-item">
            <span>full name</span>
            <p>{`${user?.profile.firstName} ${user?.profile.lastName}`}</p>
          </div>

          <div  className="content-item">
            <span>phone number</span>
            <p>{user?.profile.phoneNumber}</p>
          </div>

          <div className="content-item">
            <span>email</span>
            <p>{user?.email}</p>
          </div>

          <div className="content-item">
            <span>bvn</span>
            <p>{user?.profile.bvn}</p>
          </div>

          <div className="content-item">
            <span>gender</span>
            <p>{user?.profile.gender}</p>
          </div>

          <div className="content-item">
            <span>marital status</span>
            <p>Single</p>
          </div>

          <div className="content-item">
            <span>children</span>
            <p>None</p>
          </div>

          <div className="content-item">
            <span>type of residence</span>
            <p>Apartment</p>
          </div>
        </div>
      </div>

      <div className="hr"/>

      <div className="content-box-wrapper">
        <h4>Education and Employment</h4>
        <div className="content-box-outer">
          <div className="content-item">
            <span>level of education</span>
            <p>{user?.education.level}</p>
          </div>

          <div className="content-item">
            <span>employment status</span>
            <p>{user?.education.employmentStatus}</p>
          </div>

          <div className="content-item">
            <span>sector of employment</span>
            <p>{user?.education.sector}</p>
          </div>

          <div className="content-item">
            <span>duration of employment</span>
            <p>{user?.education.duration}</p>
          </div>

          <div className="content-item">
            <span>office email</span>
            <p>{user?.education.officeEmail}</p>
          </div>

          <div className="content-item">
            <span>monthly income</span>
            <p>
              {user?.education.monthlyIncome.reduce((a, b) => `${a} ${b}`, "")}
            </p>
          </div>

          <div className="content-item">
            <span>loan repayment</span>
            <p>{user?.education.loanRepayment}</p>
          </div>
        </div>
      </div>

      <div className="hr"/>

      <div className="content-box-wrapper">
        <h4>Socials</h4>
        <div className="content-box-outer">
          <div className="content-item">
            <span>twitter</span>
            <p>{user?.socials.twitter}</p>
          </div>

          <div className="content-item">
            <span>Facebook</span>
            <p>{user?.socials.facebook}</p>
          </div>

          <div className="content-item">
            <span>instagram</span>
            <p>{user?.socials.instagram}</p>
          </div>
        </div>
      </div>

      <div className="hr"/>

      <div className="content-box-wrapper">
        <h4>Gurantor</h4>
        <div className="content-box-outer">
          <div className="content-item">
            <span>full name</span>
            <p>{`${user?.guarantor.firstName} ${user?.guarantor.lastName}`}</p>
          </div>

          <div className="content-item">
            <span>phone number</span>
            <p>{user?.guarantor.phoneNumber}</p>
          </div>

          <div className="content-item">
            <span>email address</span>
            <p>user@example.com</p>
          </div>

          <div className="content-item">
            <span>relationship</span>
            <p>None</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
