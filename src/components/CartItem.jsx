import { decrease, increase, remove } from 'features/cartSlice';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
   const dispatch = useDispatch();

   const incHandler = () => dispatch(increase(id));
   const decHandler = () => dispatch(decrease(id));
   const removeHandler = () => dispatch(remove(id));

   return (
      <section
         style={{
            width: '70vw',
            maxWidth: '90rem',
            margin: '0px auto',
         }}
      >
         <div
            className="row"
            style={{ marginTop: '10px', marginLeft: '120px' }}
         >
            <div className="col-sm-2">
               <img
                  src={img}
                  className="img-fluid"
                  alt=""
                  style={{ objectFit: 'cover', width: '5rem', height: '5rem' }}
               />
            </div>
            <div className="col-sm-2">
               <h5>{title}</h5>
               <h5 style={{ color: '#617d98' }}>${price}</h5>
               <MDBIcon
                  fas
                  icon="trash"
                  style={{ cursor: 'pointer', color: 'red' }}
                  onClick={removeHandler}
               />
            </div>
            <div className="col-sm-8">
               <MDBIcon
                  style={{ cursor: 'pointer' }}
                  fas
                  icon="chevron-up"
                  onClick={incHandler}
               />
               <p style={{ marginTop: '10px' }}>{amount}</p>
               <MDBIcon
                  fas
                  icon="chevron-down"
                  style={{ cursor: 'pointer' }}
                  onClick={decHandler}
               />
            </div>
         </div>
      </section>
   );
};

export default CartItem;
