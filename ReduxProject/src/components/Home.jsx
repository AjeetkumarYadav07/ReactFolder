import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardData from "./CardData";
import {useDispatch} from 'react-redux';
import { addToCart } from "../redux/features/cartSlice";
import toast  from 'react-hot-toast';
const Home = () => {
  const [data, setData] = useState(CardData); // ✅ Corrected useState usage

//   console.log(data);

const dispatch = useDispatch();

//addTocart 

 const send = (e) =>{
    dispatch(addToCart (e));
    toast.success("Item added sucessfully ")
   
 }
 
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
          Restaurants in Ahmedabad Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {data.map((items, index) => {
            return (
              <Card
                key={index}
                style={{ width: "22rem", border: "none" }}
                className="hove mb-4"
              >
                <Card.Img variant="top" className="cd" src={items.imgdata} />
                <div className="card_body">
                  <div className="upper_data d-flex justify-content-between align-items-center">
                    <h4 className="mt-2">{items.dish}</h4>
                    <span>{items.rating}&nbsp;★</span>{" "}
                    {/* ✅ Fixed variable reference */}
                  </div>
                  <div className="lower_data d-flex justify-content-between ">
                    <h5>{items.address}</h5>
                    <span>₹ {items.price}</span>
                  </div>
                  <div className="extra"></div>
                  <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={items.arrimg} className="limg" alt="" />
                    <Button
                      style={{
                        width: "150px",
                        background: "#ff3054db",
                        border: "none",
                      }}
                      variant="outline-light"
                      className="mt-2 mb-2"
                    onClick={() => send(items)} >
                      Add TO Cart
                    </Button>
                    <img src={items.delimg} className="laimg" alt="" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
