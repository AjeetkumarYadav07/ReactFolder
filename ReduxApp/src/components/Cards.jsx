import React, { useState }  from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardData from "./CardData";
import './Style.css';


const Cards = () => {

  const  [data , setData] = useState(CardData);
  // console.log(data);

  return (
    <>
         <div className="container mt-3">
          <h2 className="text-center">Add to cart Projects</h2>
          <div className="row d-flex justify-content-center align-items-center">
             {data.map((curElemnt , id ) =>{
               return(  
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={curElemnt.imgdata}  style={{ height:"16rem "}} className="mt-3"/>
                  <Card.Body>
                    <Card.Title>{curElemnt.rname}</Card.Title>
                    <Card.Text>
                     Price : $ {curElemnt.price }
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                     
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  </Card.Body>
                </Card>)
             })}
          </div>
         </div>
    
    </>
  );
};

export default Cards;
