import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Borther = () => {
    const [money] =useContext(MoneyContext)
    return (
        <div>
            <h2>Borother</h2>
            <p>Grandpa:{money} </p>
        </div>
    );
};

export default Borther;