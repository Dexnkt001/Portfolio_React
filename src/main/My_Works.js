import React from "react";
import Photo_1 from "../photo/1.jpg";
import Photo_2 from "../photo/2.jpg";
import Photo_3 from "../photo/3.jpg";
import Photo_4 from "../photo/4.jpg";
import SliderItem from "./SliderItems";

function My_Works() {
  const arr = [Photo_1, Photo_2, Photo_3, Photo_4];

  return (
    <div className="My_Works">
      <h1 className="title_Works">My Works</h1>
      <div className="Slider">
        <div className="Left_Arrow">&larr;</div>
        {arr.map((element) => {
          return <SliderItem url={element} />;
        })}
        <div className="Roght_Arrow">&rarr;</div>
      </div>
    </div>
  );
}

export default My_Works;
