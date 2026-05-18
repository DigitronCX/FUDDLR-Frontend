import { IconPawFilled } from "@tabler/icons-react";

const brands = [
    { name: "DOG YOG", count: 12, active: true },
    { name: "JOSERA", count: 7 },
    { name: "NATURAW", count: 3 },
    { name: "FEED FOR THOUGHT", count: 2 },
    { name: "IPROMEA", count: 14 },
    { name: "MOOD FOOD", count: 16 },
    { name: "VETACTIV8", count: 14 },
    { name: "CEZAR'S CHOICE", count: 16 },
];
const categories = [
    { name: "PET FOODS", count: 12, active: true },
    { name: "PET ICE CREAM", count: 7 },
];

export default function Sidebar() {
    return (
        <div>
            {/* Search */}
            <div className="flex justify-center gap-3 mb-10">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-80 px-4 py-2 placeholder:text-gray-400 rounded-full border border-gray-200 outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
                <button className="px-6 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition">
                    SEARCH
                </button>
            </div>
            <h2 className="text-2xl mb-4 text-secondary font-youngSerif">Brands</h2>

            <div className="flex flex-wrap gap-3">
                {brands.map((brand, i) => (
                    <button
                        key={i}
                        className={`px-4 py-2 rounded-full text-[10px] tracking-widest border flex items-center gap-2 ${brand.active
                            ? "bg-brand text-white"
                            : "border-green-500 text-secondary"
                            }`}
                    >
                        <span className="text-white p-1 bg-brand rounded-full">
                            <IconPawFilled className="size-3" />
                        </span>
                        {brand.name} {brand.count}
                    </button>
                ))}
            </div>
            <h2 className="text-2xl my-4 text-secondary font-youngSerif">Categories</h2>

            <div className="flex flex-wrap gap-3">
                {categories.map((brand, i) => (
                    <button
                        key={i}
                        className={`px-4 py-2 rounded-full text-[10px] tracking-widest border flex items-center gap-2 ${brand.active
                            ? "bg-brand text-white"
                            : "border-green-500 text-secondary"
                            }`}
                    >
                        <span className="text-white p-1 bg-brand rounded-full">
                            <IconPawFilled className="size-3" />
                        </span>
                        {brand.name} {brand.count}
                    </button>
                ))}
            </div>
        </div>
    );
}