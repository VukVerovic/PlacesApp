import React from "react";
import PlaceList from "../../places/components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const dummyPlaces = [
  {
    id: "p1",
    title: "Naslov 2",
    address: "Adresa 1",
    descrition: "opis 1",
    image:
      "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
    creator: "u1",
    location: {
      lat: 40.5343,
      lng: -54.323,
    },
  },
  {
    id: "p2",
    title: "Naslov 2",
    address: "Adresa 2",
    descrition: "opis 2",
    image:
      "https://scontent-fra3-1.xx.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_ohc=62eGHtX4ObAAX90L8K-&_nc_ht=scontent-fra3-1.xx&cb_e2o_trans=t&oh=00_AfBd4AEZk20eENy-gl7glDT1onX2mRf-D3PgBgQzdtifaQ&oe=65C7AE0E",
    creator: "u2",
    location: {
      lat: 40.5343,
      lng: -54.323,
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  console.log(userId);
  const loadedPlaces = dummyPlaces.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
