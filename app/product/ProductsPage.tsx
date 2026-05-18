// import ProductCard from "@/components/ProductCard";
// import Sidebar from "@/components/Sidebar";

import ProductCard from "@/components/ProductCards";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Test Product 1",
        brand: "DOG YOG",
        stock: true,
        image: "/Product/Product-1.png",
    },
    {
        id: 2,
        name: "Test Product 2",
        brand: "DOG YOG",
        stock: true,
        image: "/Product/Product-2.png",
    },
    {
        id: 3,
        name: "Test Product 3",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-3.png",
    },
    {
        id: 4,
        name: "Test Product 4",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-4.png",
    },
    {
        id: 5,
        name: "Test Product 5",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-5.png",
    },
    {
        id: 6,
        name: "Test Product 6",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-6.png",
    },
    {
        id: 7,
        name: "Test Product 7",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-9.png",
    },
    {
        id: 8,
        name: "Test Product 8",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-8.png",
    },
    {
        id: 9,
        name: "Test Product 9",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-9.png",
    },
    {
        id: 10,
        name: "Test Product 10",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-10.png",
    },
    {
        id: 11,
        name: "Test Product 11",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-3.png",
    },
    {
        id: 12,
        name: "Test Product 12",
        brand: "DOG YOG",
        stock: false,
        image: "/Product/Product-2.png",
    },
];

export default function Home() {
    return (
        <main className="min-h-screen px-14 py-20 relative overflow-hidden">
            {/*Background Blobs*/}
            <div className="z-0">
                <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
                <div className="absolute top-25 left-40 size-10 bg-accent rounded-md opacity-20 " />
                <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
                <div className="absolute bottom-1/7 right-5 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
                <div className="absolute right-1/6 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-xs tracking-[5px] text-primary uppercase">
                        Our Product
                    </p>
                    <h1 className="text-5xl mt-2 text-secondary font-youngSerif">
                        Explore Our{" "}
                        <span className="text-brand">Product</span> Range
                    </h1>
                    <p className="text-primary mt-3 max-w-3xl mx-auto">
                        Browse through our carefully organized product range, where items are
                        grouped by categories and brands for a seamless shopping experience.
                    </p>
                </div>


                <div className="grid grid-cols-[1fr_2fr] gap-10">
                    {/* Sidebar */}
                    <div className="flex flex-col gap-20">
                        <Sidebar />
                        <div className="relative mt-20 flex justify-center md:justify-center w-full">

                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden bg-linear-to-tl from-green-900/30 to-accent/50 w-3/4 flex justify-center z-20">
                                <Image
                                    src="/Sections/AboutPage.png" //replace with your image
                                    alt="Dog"
                                    width={350}
                                    height={200}
                                    className="object-contain w-auto h-auto"
                                />
                            </div>

                            {/* Small Image */}
                            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-3 size-30 rounded-2xl bg-linear-to-tl from-background to-accent/40 overflow-hidden shadow-lg flex items-center justify-center">
                                <Image
                                    src="/Images/Vector.svg" // replace with your image
                                    alt="Dog playing"
                                    width={100}
                                    height={100}
                                    className="object-cover size-12"
                                />
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-10 -translate-x-3 size-30 rounded-2xl bg-linear-to-tl from-background to-accent/40 overflow-hidden shadow-lg flex items-center justify-center z-10"></div>
                        </div>

                    </div>

                    {/* Products */}
                    <div>
                        <div className="flex justify-end text-sm text-gray-500 mb-4">
                            12 Item Show
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}