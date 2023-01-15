import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "../context/schema";
import { useParams } from "react-router-dom";
import { Image } from "../utils/utils";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NoPage from "./NoPage";

const Details = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
        variables: { id },
    });
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (data && data.getProductById) {
            setProduct(data.getProductById);
        }
    }, [data, product.status]);

    return (
        <div className="w-full">
            <Navbar styles={"bg-gray-900 p-2 text-white"} />

            {product.status === "NOT_FOUND" && <NoPage />}
            {!loading && product.status === "OK" && (
                <div className="w-full flex justify-center mt-4">
                    <div className="max-w-7xl w-full p-2">
                        <div className="gap-6">
                            <Image
                                styles={"h-96 "}
                                imgUrl={product.body.image}
                                alt={product.body.title}
                            />
                            <div className="flex flex-col mt-6">
                                <h1 className="uppercase font-bold text-lg">
                                    {product.body.title}
                                </h1>
                                <div className="flex flex-col mt-8">
                                    <h2 className="font-semibold text-md">
                                        Description
                                    </h2>
                                    <p className="lowercase first-letter:uppercase text-slate-500 mt-4">
                                        {product.body.description}
                                        {/* {product.description}
                                        {product.description}
                                        {product.description}
                                        {product.description}
                                        {product.description} */}
                                    </p>
                                </div>
                                <p className="font-bold text-xl mt-8">
                                    ${product.body.price}
                                </p>

                                <button
                                    type="button"
                                    className="bg-primary text-white p-4 rounded-sm font-bold uppercase mt-8"
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
