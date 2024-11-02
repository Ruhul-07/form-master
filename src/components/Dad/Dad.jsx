import Myself from "../Myself/Myself"
import Brother from "../Borther/Borther.jsx"
import Sister from "../Sister/Sister";
const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;