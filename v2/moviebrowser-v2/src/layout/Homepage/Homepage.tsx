import React, {FC} from 'react';
import Navbar from "../../components/organisms/Navbar/Navbar";
import FrontGrid from "../../components/organisms/FrontGrid/FrontGrid";


const Homepage: FC = () => {
    return (
    <div className="__body">
        <Navbar />
        <FrontGrid />
    </div>
    );
}

export default Homepage;



