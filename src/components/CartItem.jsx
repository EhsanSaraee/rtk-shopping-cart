import { MDBIcon } from 'mdb-react-ui-kit';

const CartItem = ({ id, img, title, price, amount }) => {
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
            <div className="col-sm-2" margin>
               <h5>{title}</h5>
               <h5 style={{ color: '#617d98' }}>${price}</h5>
               <MDBIcon
                  fas
                  icon="trash"
                  style={{ cursor: 'pointer', color: 'red' }}
               />
            </div>
            <div className="col-sm-8">
               <MDBIcon style={{ cursor: 'pointer' }} fas icon="chevron-up" />
               <p style={{ marginTop: '10px' }}>{amount}</p>
               <MDBIcon fas icon="chevron-down" style={{ cursor: 'pointer' }} />
            </div>
         </div>
      </section>
   );
};

export default CartItem;
