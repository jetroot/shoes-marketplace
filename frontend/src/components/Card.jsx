import { useState, useEffect } from "react";
import TitleWithButton from "./TitleWithButton";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../context/schema";
import Loader from "./Loader";
import { Image } from "../utils/utils";
import { Link } from "react-router-dom";

const Card = () => {
    const [products, setProducts] = useState([]);
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    useEffect(() => {
        if (data) {
            setProducts(data.products.body);
        }
    }, [data, products]);

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-7xl w-full mt-5">
                <TitleWithButton
                    title={"Recommended"}
                    btnLabel={"More"}
                    styles={" bg-white my-4 p-4 w-full"}
                />
                {loading && <Loader />}
                {!loading && <div className="flex gap-10 flex-wrap max-sm:flex-col max-sm:w-full justify-center w-full bg-white p-5 mb-4">
                    {products.map((product) => {
                        return (
                            <Link to={`details/${product.id}`} key={product.id}>
                                <div className="hover:shadow-slate-300 hover:shadow-md rounded-br-lg rounded-bl-lg mb-5 border-b-2 border-slate-300">
                                    <Image
                                        imgUrl={product.image}
                                        alt={"image"}
                                        styles={"w-96 h-96"}
                                    />
                                    <div className="w-full p-3 flex justify-between">
                                        <div className="flex justify-between w-8/12">
                                            <h1 className="text-2xl text-primaryTextColor truncate lowercase first-letter:uppercase">
                                                {product.title}
                                            </h1>
                                        </div>
                                        <h1 className="text-xl text-primary font-semibold">
                                            ${product.price}
                                        </h1>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>}
            </div>
        </div>
    );
};

export default Card;
