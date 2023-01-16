import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { CREATE_PRODUCT } from "../context/schema";

const Create = () => {
    const initialSate = {
        title: "",
        description: "",
        image: "",
        price: 0,
    };
    const [form, setForm] = useState(initialSate);
    const [createProduct, { data, loading, error }] =
        useMutation(CREATE_PRODUCT);
    const [productCreated, setProductCreated] = useState(2);

    const handleSubmit = (e) => {
        const { title, description, image, price } = form;
        e.preventDefault();

        if (!title || !description || !image || !price) return;

        createProduct({
            variables: {
                product: form,
            },
        });

        // reset form
        setForm(initialSate);
    };

    useEffect(() => {
        switch (data && data.createProduct.status) {
            case "INTERNAL_SERVER_ERROR":
                console.log("INTERNAL_SERVER_ERROR");
                setProductCreated(0); // product created
                break;

            case "CREATED":
                console.log("CREATED");
                setProductCreated(1); // couldn't created the product
                break;

            default: // didn't initialize the process
                setProductCreated(2);
                break;
        }
    }, [productCreated, form, data]);

    const handleChange = (e, name) => {
        setForm((prevState) => ({
            ...prevState,
            [name]: e.target.value,
        }));
    };

    return (
        <div className="w-fll">
            <Navbar styles={"bg-gray-900 p-2 text-white"} />

            <div className="w-full flex justify-center">
                <div className="max-w-7xl w-full mt-5 flex flex-col gap-2 sm:px-2">
                    {productCreated === 1 && (
                        <div className="bg-green-500 p-4 text-white text-center">
                            Product created successfully
                        </div>
                    )}

                    {productCreated === 0 && (
                        <div className="bg-red-500 p-4 text-white text-center">
                            Error happened
                        </div>
                    )}

                    <input
                        type={"text"}
                        placeholder="title of the product"
                        name="title"
                        value={form.title}
                        className="p-4 border-2 outline-none"
                        onChange={(e) => {
                            handleChange(e, "title");
                        }}
                    />
                    <textarea
                        rows={10}
                        placeholder="title of the description"
                        name="description"
                        value={form.description}
                        className="p-4 border-2 outline-none"
                        onChange={(e) => {
                            handleChange(e, "description");
                        }}
                    ></textarea>
                    <input
                        type={"text"}
                        value={form.image}
                        placeholder="link of the image"
                        name="image"
                        className="p-4 border-2 outline-none"
                        onChange={(e) => {
                            handleChange(e, "image");
                        }}
                    />
                    <input
                        type={"number"}
                        value={form.price === 0 ? "" : form.price}
                        placeholder="product price"
                        name="price"
                        className="p-4 border-2 outline-none"
                        onChange={(e) => {
                            handleChange(e, "price");
                        }}
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white p-3 font-semibold rounded-full"
                        onClick={handleSubmit}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Create;
