import { IconBulb, IconDiamondFilled, IconPawFilled, IconTargetArrow, IconTrophy } from "@tabler/icons-react";

export default function MissionVision() {
	return (
		<section className="py-10 md:py-20 px-4 sm:px-6 md:px-12 min-h-screen place-content-center relative overflow-hidden">
			<div className="mx-auto grid md:grid-cols-[1fr_2fr_1fr] gap-5 items-center">

				{/* LEFT - Mission */}
				<div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-secondary font-youngSerif">
						Our <span className="text-brand">Mission</span>
					</h2>
					<p className="mt-4 text-primary text-base sm:text-xl">
						Our mission is to connect pet stores with carefully selected brands that prioritise quality, transparency and real ingredients.
					</p>
				</div>

				{/* CENTER - ICON GRID */}
				<div className="grid md:grid-cols-2 gap-4 relative">
					{/* <div className="absolute left-1/2 top-1/3 -translate-x-1/2 translate-y-1/2 size-20 bg-secondary rounded-full z-50"></div> */}
					<div className="absolute z-20 inset-0 mb-10 flex items-center justify-center">
						<div className="size-25 md:size-30 bg-background rounded-3xl flex justify-center items-center">
							<IconPawFilled className="size-14 md:size-18 text-accent" />
						</div>
					</div>

					<div className="flex flex-row md:flex-col gap-4">
						{/* Card 1 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center bg-accent shadow-lg">
							<span className="text-white text-5xl">
								<IconBulb className="size-34 stroke-1" />
							</span>
						</div>

						{/* Card 2 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center bg-accent shadow-lg">
							<span className="text-white text-5xl">
								<IconTargetArrow className="size-34 stroke-1" />
							</span>
						</div>
					</div>
					<div className="flex flex-row md:flex-col gap-4 md:-translate-y-10">
						{/* Card 3 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center bg-accent shadow-lg">
							<span className="text-white text-5xl">
								<IconDiamondFilled className="size-34 stroke-1" />
							</span>
						</div>

						{/* Card 4 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center bg-accent shadow-lg">
							<span className="text-white text-5xl">
								<IconTrophy className="size-34 stroke-1" />
							</span>
						</div>
					</div>
				</div>

				{/* RIGHT - Vision */}
				<div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl text-secondary font-youngSerif">
						Our <span className="text-brand">Vision</span>
					</h2>
					<p className="mt-4 text-primary text-base sm:text-lg">
						To create a world where every pet has access to high quality, honest nutrition and every pet owner can choose with confidence.
					</p>
				</div>

			</div>

			{/* Background blobs */}
			{/* <div className="z-0">
                <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
                <div className="absolute top-25 left-40 size-10 bg-accent rounded-md opacity-20 " />
                <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-5 left-1/4 size-24 bg-linear-to-t to-background from-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
                <div className="absolute bottom-1/7 right-5 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
                <div className="absolute right-1/6 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
            </div> */}
		</section>
	);
}