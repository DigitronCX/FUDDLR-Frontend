"use client";
import { getAllBrands } from "@/services/productService";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BrandImage {
  _id: string;
  url: string;
  public_id: string;
}

interface Brand {
  _id: string;
  name: string;
  images: BrandImage[];
  createdAt: string;
}
export default function FeaturedBrands() {
  const [allBrands, setAllBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const getBrands = async () => {
      const res = await getAllBrands()
      if (res?.success) {
        setAllBrands(res?.data)
      }
    }
    getBrands()
  }, [])

  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-10 space-y-3">
          <p className="text-sm tracking-widest text-gray-500 uppercase">
            Brands
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-youngSerif text-gray-900">
            Our Featured{" "}
            <span className="text-brand">Brands</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
            Simple, honest nutrition for pets sourced from brands that truly care.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {allBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-md transition px-2 py-6 flex flex-col items-center justify-center text-center cursor-pointer border border-gray-200"
            >
              <div className="relative w-full h-34 mb-4">
                {
                  brand?.images?.map((data: BrandImage) => (
                    <Image
                      alt={`Image of ${brand?.name ?? "brand"}`}
                      key={data._id}
                      src={data?.url}
                      title={brand?.name}
                      height={500}
                      width={500}
                      className="object-contain w-full h-full"
                    />
                  ))
                }
              </div>
              <p className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                {brand?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}