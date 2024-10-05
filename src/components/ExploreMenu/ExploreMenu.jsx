import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category , setCategory}) => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our options</h1>
        <p className="explore-menu-text">Visit our shop to discover a world of unique products crafted with care and passion. While we don't offer online sales, our website serves as a digital showcase of our diverse collection.</p>
        <div className="explore-menu-list">
          {menu_list.map((item , index)=>{
            return(
              <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="image"/>
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr/>
        
      </div>
    </>
  );
};

export default ExploreMenu;