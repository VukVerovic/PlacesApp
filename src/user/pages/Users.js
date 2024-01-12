import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const dummyUsers = [
    {
      id: Math.random() + "",
      name: "Pera Peric",
      image:
        "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=62eGHtX4ObAAX90L8K-&_nc_ht=scontent-fra3-1.xx&cb_e2o_trans=t&oh=00_AfBd4AEZk20eENy-gl7glDT1onX2mRf-D3PgBgQzdtifaQ&oe=65C7AE0E",
      places: 2,
    },
    {
      id: Math.random() + "",
      name: "Marko Markovic",
      image:
        "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=62eGHtX4ObAAX90L8K-&_nc_ht=scontent-fra3-1.xx&cb_e2o_trans=t&oh=00_AfBd4AEZk20eENy-gl7glDT1onX2mRf-D3PgBgQzdtifaQ&oe=65C7AE0E",
      places: 3,
    },
    {
      id: Math.random() + "",
      name: "Jovan Jovanovic",
      image:
        "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=62eGHtX4ObAAX90L8K-&_nc_ht=scontent-fra3-1.xx&cb_e2o_trans=t&oh=00_AfBd4AEZk20eENy-gl7glDT1onX2mRf-D3PgBgQzdtifaQ&oe=65C7AE0E",
      places: 13,
    },
  ];

  return <UserList items={dummyUsers} />;
};

export default Users;
