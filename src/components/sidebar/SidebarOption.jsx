import { Add } from "@mui/icons-material";
import React from "react";
import "./sidebarOption.scss";

const SidebarOption = () => {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOptions__item">
        <img
          src="https://study.com/cimages/course-image/mtel-history-practice-study-guide_172249_large.jpg"
          alt="sidebar images"
        />
        <p>history</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_180152187_970679970450042_64007.jpg"
          alt="sidebar images"
        />
        <p>business</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://i.pinimg.com/originals/4b/5c/e4/4b5ce463d39066660c6289da247fc990.png"
          alt="sidebar images"
        />
        <p>psychology</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://thumbs.dreamstime.com/b/vegetables-spices-ingredient-cooking-italian-food-black-wooden-old-board-rustic-style-76334485.jpg"
          alt="sidebar images"
        />
        <p>cooking</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://i.pinimg.com/originals/df/68/61/df68616f9ac5be91a090ffb8ca111859.jpg"
          alt="sidebar images"
        />
        <p>music</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/chemical-science/chemical-science-header-image.jpg?version=8a759ae3"
          alt="sidebar images"
        />
        <p>science</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://welpmagazine.com/wp-content/uploads/2020/09/Health-Insurance-1920x1080-1.jpg"
          alt="sidebar images"
        />
        <p>health</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://katzjcc.org/app/uploads/2018/04/Movies.jpg"
          alt="sidebar images"
        />
        <p>movies</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://www.techbitmax.com/wp-content/uploads/2021/08/shutterstock_1583248045.jpg"
          alt="sidebar images"
        />
        <p>technology</p>
      </div>
      <div className="sidebarOptions__item">
        <img
          src="https://www.lecole.edu.pk/wp-content/uploads/2021/01/Education-Pic.jpg"
          alt="sidebar images"
        />
        <p>education</p>
      </div>

      <div className="sidebarOptions__add">
        <Add />
        <p>descover spaces</p>
      </div>
    </div>
  );
};

export default SidebarOption;
