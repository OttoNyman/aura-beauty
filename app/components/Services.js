import { Leaf, Gem, Sun, Droplets, Eye } from "lucide-react";

export default function Services({ dict }) {
	// Объект iconMap перенесен внутрь компонента для гарантии доступности
	const iconMap = {
		"Перукарські послуги": <Leaf className="w-12 h-12 text-muted-olive mb-4" />,
		Hairdressing: <Leaf className="w-12 h-12 text-muted-olive mb-4" />,
		"Парикмахерские услуги": (
			<Leaf className="w-12 h-12 text-muted-olive mb-4" />
		),

		"Нігтьовий сервіс": <Gem className="w-12 h-12 text-muted-olive mb-4" />,
		"Nail Service": <Gem className="w-12 h-12 text-muted-olive mb-4" />,
		"Ногтевой сервис": <Gem className="w-12 h-12 text-muted-olive mb-4" />,

		"Косметологія обличчя": <Sun className="w-12 h-12 text-muted-olive mb-4" />,
		"Facial Cosmetology": <Sun className="w-12 h-12 text-muted-olive mb-4" />,
		"Косметология лица": <Sun className="w-12 h-12 text-muted-olive mb-4" />,

		"Догляд за тілом": <Droplets className="w-12 h-12 text-muted-olive mb-4" />,
		"Body Care": <Droplets className="w-12 h-12 text-muted-olive mb-4" />,
		"Уход за телом": <Droplets className="w-12 h-12 text-muted-olive mb-4" />,

		"Макіяж та брови": <Eye className="w-12 h-12 text-muted-olive mb-4" />,
		"Makeup & Brows": <Eye className="w-12 h-12 text-muted-olive mb-4" />,
		"Макияж и брови": <Eye className="w-12 h-12 text-muted-olive mb-4" />,
	};

	return (
		<section id="services" className="py-20 sm:py-32 bg-ivory">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-playfair text-4xl sm:text-5xl font-bold text-muted-olive text-center mb-12">
					{dict.title}
				</h2>
				{/* Горизонтальный скролл-контейнер. */}
				<div className="flex overflow-x-auto space-x-8 pb-4 horizontal-scroll">
					{dict.cards.map((service, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-72 bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
						>
							{iconMap[service.title] || (
								<Leaf className="w-12 h-12 text-muted-olive mb-4" />
							)}
							<h3 className="font-playfair text-2xl font-bold text-dark-gray mb-2">
								{service.title}
							</h3>
							<p className="text-dark-gray/80">{service.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
