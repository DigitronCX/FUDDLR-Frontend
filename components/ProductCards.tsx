import Image from "next/image";

type Props = {
    product: {
        id: number;
        name: string;
        brand: string;
        stock: boolean;
        image: string;
    };
};

export default function ProductCard({ product }: Props) {
    return (
        <div className="bg-white border border-accent/40 rounded-xl hover:shadow-md transition">
            <div className="h-40 flex items-center justify-center mb-4">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="max-h-full object-contain w-full h-full rounded-t-2xl shadow-sm"
                />
            </div>
            <div className="px-4 pb-4">
                <h3 className="font-semibold text-secondary text-xl">{product.name}</h3>
                <p className="text-sm text-primary font-semibold">{product.brand}</p>

                <div className="flex items-center gap-2 mt-2 text-sm">
                    <span
                        className={`w-2 h-2 rounded-full ${product.stock ? "bg-green-500" : "bg-red-500"
                            }`}
                    ></span>
                    <span className="text-xs text-secondary">{product.stock ? "In Stock" : "Out of Stock"}</span>
                </div>

                <p className="text-xs text-secondary font-light underline mt-2">Sign in to view price</p>
            </div>
        </div>
    );
}