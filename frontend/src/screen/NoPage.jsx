import Navbar from "../components/Navbar";

const NoPage = () => {
    return (
        <div className="w-full">
            <Navbar styles={"bg-gray-900 p-2 text-white"} />
            <div className="flex justify-center">
                <div className="max-w-7xl w-full mt-5">Nopage</div>
            </div>
        </div>
    );
};

export default NoPage;
