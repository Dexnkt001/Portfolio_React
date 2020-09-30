import React from "react";
import Photo_1 from "../photo/1.jpg";
import Photo_2 from "../photo/2.jpg";
import Photo_3 from "../photo/3.jpg";
import Photo_4 from "../photo/4.jpg";
import SliderItem from "./SliderItems";

function My_Works() {
  const arr = [Photo_1, Photo_2, Photo_3, Photo_4];

  const [count, nextSet] = React.useState(1);

  nextSet(function lol(count) {
    return count++;
  });

  // let [a, newarr] = React.useState();

  // function lol() {
  //   newarr(
  //     a.map((element) => {
  //       return element * 3;
  //     })
  //   );
  // }
  console.log(count);
  return (
    <div className="My_Works">
      <h1 className="title_Works">My Works</h1>
      <div className="Slider" id="slider">
        <div className="Left_Arrow">&larr;</div>
        <div className="Slider_Container">
          {arr.map((element) => {
            return <SliderItem url={element} />;
          })}
        </div>
        <div className="Right_Arrow" onClick={nextSet}>
          &rarr;
        </div>
      </div>
    </div>
  );
}

export default My_Works;
