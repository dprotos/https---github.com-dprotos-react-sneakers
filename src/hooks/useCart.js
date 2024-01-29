import { useContext } from 'react'
import AppContext from "../context";

export const useCart = () => {
    const {cart, setCart} = useContext(AppContext);
    const totalCartSum = cart.reduce((sum, obj) => obj.price + sum, 0);
    return ({cart, setCart, totalCartSum});
}