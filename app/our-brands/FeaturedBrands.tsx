// components/FeaturedBrands.jsx
import Image from "next/image";

const brands = [
 
  { name: "Mood Food", logo: "/Brands/Brand-2.png" },
  { name: "Josera", logo: "/Brands/Brand-3.png" },
  { name: "Dog Yog", logo: "/Brands/Brand-4.png" },
  { name: "Ipromea", logo: "/Brands/Brand-5.png" },
  { name: "Vetactive8", logo: "/Brands/Brand-6.png" },
  { name: "Fishtastic", logo: "/Brands/Brand-11.png" },
  { name: "Feed for thought", logo: "/Brands/Brand-8.png" },
  { name: "Naturawr", logo: "/Brands/Brand-9.png" },
  { name: "Classy tails", logo: "/Brands/Brand-10.png" },
];

export default function FeaturedBrands() {
  return (
    <section className="py-10 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Background blobs */}
      {/* <div className="z-0">
        <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
        <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />


        <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
        <div className="absolute bottom-1/7 right-0 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
        <div className="absolute right-20 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
      </div> */}

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-10 space-y-3">
          <p className="text-sm tracking-widest text-gray-500 uppercase">
            Brands
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-youngSerif text-gray-900">
            Our Featured{" "}
            <span className="text-green-600">Brands</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl text-sm sm:text-base">
            Simple, honest nutrition for pets sourced from brands that truly care.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-md transition px-2 py-6 flex flex-col items-center justify-center text-center cursor-pointer border border-gray-200"
            >
              <div className="relative w-full h-34 mb-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  height={300}
                  width={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm font-medium tracking-wider text-gray-700 uppercase">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}