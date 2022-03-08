import React from "react";

const WidgetOption = ({ Img, Title, Description }) => {
  return (
    <>
      <div className="widget__content">
        <img src={Img} alt="widget__img" />
        <div className="widget__content__item">
          <h5>{Title}</h5>
          <p>{Description}</p>
        </div>
      </div>
      <hr />
    </>
  );
};

export default WidgetOption;
