import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar styles={"bg-gray-900 p-2 text-white"} />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;
