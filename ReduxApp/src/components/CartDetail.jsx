import React, { useState } from "react";
import { Table } from "react-bootstrap";
import CardData from "./CardData";
const CartDetail = () => {
  
  return (
    <>
      <h1>hy i'm cart </h1>

      <div className="container mt-2">
        <h2 className="text-center ">Items Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            
             <div className="items_img">

              <img src="https://b.zmtcdn.com/data/pictures/5/113895/3c06f6fbb8f667a2537dfdb6f060dc8b_o2_featured_v2.jpg" alt="img" />
            </div> 

            <div className="deatil">
              <Table>
                <tr>
                  <td> 
                    <p><strong>  Restaurant</strong> :Massala Theoryy</p>
                    <p><strong>  Price </strong> : ₹ 300</p>
                    <p><strong>  dishes</strong>: North Indian , Biryani , Mughlai</p>
                    <p><strong>  Total</strong>:  ₹ 300</p>
                  </td>
                  <td>
                    <p><strong> Rating :</strong> <span style={{ background:"green" , color:"#fff" , padding:"2px" , borderRadius:"5px" }} ></span> *</p>
                    <p><strong> Oder Review :</strong> <span></span> 1175 + odrder placed from here recenlty  </p>
                    <p><strong> Remove :</strong> <span> <i className="fas fa-trash" style={{ color:"red" }}></i> </span></p>
                  </td>
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartDetail;
