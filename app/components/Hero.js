import Image from "next/image";

export default function Hero({ dict }) {
	return (
		<section
			id="hero"
			className="relative h-screen flex items-center justify-center"
		>
			<div className="absolute inset-0 bg-black/30 z-10"></div>
			<Image
				src="/images/photo2.jpg"
				width={2048}
				height={1152}
				alt="Спа интерьер с растениями"
				className="absolute inset-0 w-full h-full object-cover"
			/>

			<div className="relative z-20 text-center text-white px-4">
				<h1 className="font-playfair text-6xl md:text-8xl font-bold drop-shadow-lg">
					{dict.title}
				</h1>
				<p className="font-roboto text-xl md:text-2xl mt-4 max-w-2xl mx-auto drop-shadow-md">
					{dict.subtitle}
				</p>
				<a
					href="tel:+380991234567"
					className="mt-8 inline-block bg-terracotta text-white font-bold py-4 px-8 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg transform hover:scale-105"
				>
					{dict.cta}
				</a>
			</div>
		</section>
	);
}
