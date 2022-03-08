import React from "react";
import WidgetOption from "./WidgetOption";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <h4>Spaces to fellow</h4>
      <hr />
      <WidgetOption
        Img="https://img.etimg.com/thumb/msid-46065504,width-300,imgsize-52163,,resizemode-4,quality-100/.jpg"
        Title="Mobile App Programmer"
        Description="daily description unforgettable lines"
      />
      <WidgetOption
        Img="https://thumbs.dreamstime.com/b/quote-icon-quote-sign-white-background-simple-vector-illustration-black-quote-icon-quote-sign-logo-144929690.jpg"
        Title="Quota of Quotes"
        Description="daily description unforgettable lines"
      />
      <WidgetOption
        Img="https://madisoncountycourier.com/wp-content/uploads/2016/03/94arts.jpg"
        Title="Art & artist"
        Description="daily description unforgettable lines"
      />
      <WidgetOption
        Img="https://iep.utm.edu/wp-content/media/Nietzsche-274x300.jpg"
        Title="friedrich nietzche"
        Description="daily description unforgettable lines"
      />
      <WidgetOption
        Img="https://image.shutterstock.com/image-photo/hand-marker-writing-marketing-strategy-260nw-522186031.jpg"
        Title="stock market strategies"
        Description="daily description unforgettable lines"
      />
      <WidgetOption
        Img="https://static.toiimg.com/photo/59755813/.jpg"
        Title="architecture world"
        Description="daily description unforgettable lines"
      />
    </div>
  );
};

export default Widget;
