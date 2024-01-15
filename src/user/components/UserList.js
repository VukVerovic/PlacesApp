import React from "react";
import UserItem from "./UserItem";
import "./UserItem.css";
import Card from "../../shared/components/UIElements/Card";

const UserList = (props) => {
  console.log(props.items);
  if (props.items.length === 0)
    return (
      <div className="center">
        <Card>
          <h2> No users found! </h2>
        </Card>
      </div>
    );
  else {
    return (
      <ul className="users-list">
        {props.items.map((user) => {
          return <UserItem user={user} />;
        })}
      </ul>
    );
  }
};

export default UserList;
