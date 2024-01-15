import { React, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./NewPlaces.css";
import Button from "../../shared/components/FormElements/Button";

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

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

  const place = dummyPlaces.find((place) => place.id === placeId);

  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("New Title:", title);
    console.log("New Address:", address);
    console.log("New Description:", description);
    place.title = title;
    place.address = address;
    place.descrition = description;
    console.log(place);
    console.log(dummyPlaces);
  };
  return (
    <div className="form-control">
      <form className="place-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder={place.title}
          onChange={handleTitleChange}
        ></input>
        <label>Address</label>
        <input
          type="text"
          placeholder={place.address}
          onChange={handleAddressChange}
        ></input>
        <label>Description</label>
        <textarea
          type="text"
          placeholder={place.descrition}
          onChange={handleDescriptionChange}
        ></textarea>
        <Button type="submit">Update place</Button>
      </form>
    </div>
  );
};

export default UpdatePlace;
