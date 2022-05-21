import { useCart } from 'hooks/cart';
import {
   MDBBadge,
   MDBContainer,
   MDBIcon,
   MDBNavbar,
   MDBNavbarBrand,
   MDBNavbarLink,
} from 'mdb-react-ui-kit';

const Navbar = () => {
   const { totalQuantity } = useCart();

   return (
      <MDBNavbar expand="lg" dark bgColor="primary">
         <MDBContainer>
            <MDBNavbarBrand
               style={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
               }}
            >
               Shopping Cart
            </MDBNavbarBrand>
            <MDBNavbarLink>
               <a className="mx-3">
                  <MDBIcon fas icon="shopping-cart" size="lg" color="white">
                     <MDBBadge
                        color="danger"
                        pill
                        notification
                        style={{ fontSize: '12px' }}
                     >
                        {totalQuantity}
                     </MDBBadge>
                  </MDBIcon>
               </a>
            </MDBNavbarLink>
         </MDBContainer>
      </MDBNavbar>
   );
};

export default Navbar;
