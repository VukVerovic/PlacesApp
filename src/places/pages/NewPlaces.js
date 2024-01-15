import { React, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import "./NewPlaces.css";
import Button from "../../shared/components/FormElements/Button";

const NewPlaces = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    setTitle(newValue);
    console.log(title);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    console.log(address);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Address:", address);
    console.log("Description:", description);
  };
  return (
    <div className="form-control">
      <form className="place-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" onChange={handleTitleChange}></input>
        <label>Address</label>
        <input type="text" onChange={handleAddressChange}></input>
        <label>Description</label>
        <textarea type="text" onChange={handleDescriptionChange}></textarea>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default NewPlaces;
