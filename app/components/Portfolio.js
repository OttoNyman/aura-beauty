import Image from "next/image";

export default function Portfolio({ dict }) {
	const images = [
		"/images/photo2.jpg",
		"/images/photo2.jpg",
		"/images/photo2.jpg",
		"/images/photo2.jpg",
		"/images/photo2.jpg",
		"/images/photo2.jpg",
	];

	return (
		<section id="portfolio" className="py-20 sm:py-32 bg-ivory">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-playfair text-4xl sm:text-5xl font-bold text-muted-olive text-center mb-12">
					{dict.title}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{images.map((src, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-lg shadow-lg"
						>
							<Image
								src={src}
								alt={`Работа #${index + 1}`}
								className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
								width={2070}
								height={1152}
							/>
							<div className="absolute inset-0 bg-black/20"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
