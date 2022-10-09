import "./UserCard.scss";
import React from "react";

interface CardProps {
  icon: string;
  title: string;
  amount: string;
}

const UserCard = ({ icon, title, amount }: CardProps) => {
  return (
    <div className="user-card">
        <div className="user-card-icon">
          <img src={icon} alt="" />
        </div>
        <p>{title}</p>
        <h3>{amount}</h3>
    </div>
  );
};

export default UserCard;
