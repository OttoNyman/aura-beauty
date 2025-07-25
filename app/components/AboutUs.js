import Image from 'next/image'

export default function AboutUs({ dict }) {
	return (
		<section id="about" className="py-20 sm:py-32 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
					<div className="rounded-lg overflow-hidden shadow-xl">
						<Image 
							src="/images/photo2.jpg"
							width={2048}
							height={1152}
							alt="Интерьер салона Aura Beauty"
							// className="w-full h-full object-cover"
						/>
					</div>
					<div className="text-center md:text-left">
						<h2 className="font-playfair text-4xl sm:text-5xl font-bold text-muted-olive mb-6">
							{dict.title}
						</h2>
						<p className="text-lg text-dark-gray leading-relaxed">
							{dict.text}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
