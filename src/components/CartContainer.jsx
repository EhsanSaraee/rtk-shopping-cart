import { useCart } from 'hooks/cart';
import CartItem from 'components/CartItem';
import { MDBBtn } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearCart, getCartTotal } from 'features/cartSlice';

const CartContainer = () => {
   const { items, totalAmount } = useCart();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCartTotal());
   }, [dispatch, items]);

   return (
      <>
         <h2 className="lead-mb-0 mt-2">Shopping Cart</h2>
         {items.map((item) => (
            <CartItem key={item.id} {...item} />
         ))}
         <footer>
            <hr />
            <div>
               <h4
                  style={{
                     display: 'flex',
                     justifyContent: 'space-evenly',
                     marginRight: '60px',
                  }}
               >
                  Total <span>${totalAmount}</span>
               </h4>
            </div>

            <MDBBtn
               color="danger"
               style={{ width: '140px', marginTop: '50px' }}
               onClick={() => dispatch(clearCart())}
            >
               Clear Cart
            </MDBBtn>
         </footer>
      </>
   );
};

export default CartContainer;
