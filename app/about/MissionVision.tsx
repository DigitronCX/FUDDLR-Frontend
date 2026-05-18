import { IconBulb, IconHandLoveYou, IconTargetArrow, IconTrophy } from "@tabler/icons-react";

export default function MissionVision() {
	return (
		<section className="py-16 px-6 md:px-16 min-h-screen place-content-center relative overflow-hidden">
			<div className="mx-auto grid md:grid-cols-3 gap-5 items-center">

				{/* LEFT - Mission */}
				<div>
					<h2 className="text-5xl text-secondary font-youngSerif">
						Our <span className="text-brand">Mission</span>
					</h2>
					<p className="mt-4 text-primary text-xl  leading-relaxed">
						Our mission is to connect pet stores with carefully selected
						brands that prioritize quality, transparency, and real ingredients.
					</p>
				</div>

				{/* CENTER - ICON GRID */}
				<div className="grid grid-cols-2 gap-4">

					<div className="flex flex-col gap-4">
						{/* Card 1 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center -bg-linear-60 from-background to-brand shadow-lg">
							<span className="text-white text-5xl">
								<IconBulb className="size-34 stroke-1" />
							</span>
						</div>

						{/* Card 2 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center -bg-linear-60 from-background to-brand shadow-lg">
							<span className="text-white text-5xl">
								<IconTargetArrow className="size-34 stroke-1" />
							</span>
						</div>
					</div>
					<div className="flex flex-col gap-4 -translate-y-10">
						{/* Card 3 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center -bg-linear-60 from-background to-brand shadow-lg">
							<span className="text-white text-5xl">
								<IconHandLoveYou className="size-34 stroke-1" />
							</span>
						</div>

						{/* Card 4 */}
						<div className="rounded-3xl h-55 w-full flex items-center justify-center -bg-linear-60 from-background to-brand shadow-lg">
							<span className="text-white text-5xl">
								<IconTrophy className="size-34 stroke-1" />
							</span>
						</div>
					</div>
				</div>

				{/* RIGHT - Vision */}
				<div>
					<h2 className="text-5xl text-secondary font-youngSerif">
						Our <span className="text-brand">Vision</span>
					</h2>
					<p className="mt-4 text-primary text-xl  leading-relaxed">
						FUDDLR is about building meaningful partnerships. We support
						retailers with curated brand access, reliable supply, and a system
						designed for easy ordering and sustainable growth.
					</p>
				</div>

			</div>

			   {/* Background blobs */}
            <div className="z-0">
                <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
                <div className="absolute top-25 left-40 size-10 bg-accent rounded-md opacity-20 " />
                <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-5 left-1/4 size-24 bg-linear-to-t to-background from-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
                <div className="absolute bottom-1/7 right-5 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
                <div className="absolute right-1/6 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
            </div>
		</section>
	);
}