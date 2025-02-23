import React from 'react'
import "./cartstyle.css" ;
import { useSelector } from 'react-redux';
const CardDetails = () => {

  const {carts} = useSelector((state) =>state.allCart);
 
  return (
    <>
      <div className='row nustify-cotent-center m-0'>
        <div className='col-md-8 mt-5 mb-5 cardsdetails'>
          <div className='card'>
            <div className='card-header bg-dark p-3'>
              <div className='card-header-flex'>
              <h5 className='text-white'>Cart Calcualtion(1)</h5>
               {
                 carts.length > 0 ? <button className='btn btn-danger mt=0 btn-sm'>  <i className='fa fa-trash-alt mr-2'></i>  </button>
                 :""
               }
              </div>
             
            </div>

            <div className='card-body p-0' >
              {
                carts.length === 0 ? <table className='table cart-table mb-0'>
                <tbody>
                    <tr>
                        <td colSpan={6}>
                            <div className='cart-empty'>
                                <i className='fa fa-shopping-cart'></i>
                                <p>Your Cart Is Empty</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table> :
                <table className='table cart-table mb-0 table-respomsive-sm'>
                      <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className='text-right'> <span id="amount" className='amount'>Total Amount</span></th>
                                            </tr>
                                        </thead>


                                        <tbody>
                                          {
                                            carts.map((data , index)=>{
                                               return(
                                                <>
                                                 <tr>
                                                  <td>
                                                    <button className='prdct-delete'> <i className='fa fa-trash-alt'></i> </button>

                                                  </td>
                                                  <td><div className='product-img'> <img src={data.imgdata}alt="" /> </div></td>
                                                  <td><div className='product-name'> <p>{data.dish}</p></div></td>
                                                  <td>{data.price} </td>
                                                  <td>
                                                     <div className="prdct-qty-container">
                                                                        <button className='prdct-qty-btn' type='button'>
                                                                       
                                      
                                                                            <i className='fa fa-minus'></i>
                                                                        </button>
                                                                        <input type="text" className='qty-input-box' value={data.qnty} disabled name="" id="" />
                                                                        <button className='prdct-qty-btn' type='button' >
                                                                            <i className='fa fa-plus'></i>
                                                                        </button>
                                                                    </div>
                                                  </td>

                                                  <td className='text-right'> 400</td>

                                                 </tr>
                                                </>
                                               )
                                            })
                                          }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}>&nbsp;</th>
                                                <th>Items In Cart <span className='ml-2 mr-2'>:</span> <span className='text-danger'> 4</span></th>
                                                <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span>  <span className='text-danger'>₹ 4</span></th>
                                            </tr>
                                        </tfoot>
                </table>
              }

            </div>

          </div>

        </div>

      </div>
    
    
    </>
  )
}

export default CardDetails