import React from "react";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";

const PlaceList = (props) => {
  if (props.items.length === 0)
    return (
      <div className="center">
        <Card>
          <h2> No places found. </h2>
        </Card>
      </div>
    );
  else {
    console.log(props.items);
    return (
      <ul className="place-list">
        {props.items.map((place) => {
          return (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.image}
              title={place.title}
              description={place.description}
              address={place.address}
              creator={place.creator}
              location={place.location}
            />
          );
        })}
      </ul>
    );
  }
};

export default PlaceList;
