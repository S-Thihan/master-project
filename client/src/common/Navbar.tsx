import { useState } from "react"
import SecondaryBar from "../components/SecondaryBar"
import Topbar from "../components/Topbar"
import CartDrawer from "../components/cart/CartDrawer";

function Navbar() {
  const [isCartOpn, setIsCartOpn] = useState(false);
  const toggleCart = () => {
    setIsCartOpn((prev) => !prev);
  }
  return (
    <nav>
      <Topbar toggleCart={toggleCart} />
      <SecondaryBar />
      <CartDrawer isCartOpen={isCartOpn} toggleCart={toggleCart}/>
    </nav>
  )
}

export default Navbar