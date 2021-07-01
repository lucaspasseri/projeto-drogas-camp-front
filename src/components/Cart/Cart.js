import { useContext } from "react";

import UserContext from "../../contexts/UserContext";

export default function Cart(){
    const {user, cart} = useContext(UserContext);

    console.log(user);
    console.log(cart);
    return(
        <>
            Cart usahushausa 
        </>
    );
}