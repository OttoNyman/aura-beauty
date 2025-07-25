export default function Prices({ dict }) {
	return (
		<section id="prices" className="py-20 sm:py-32 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="font-playfair text-4xl sm:text-5xl font-bold text-muted-olive text-center mb-12">
					{dict.title}
				</h2>
				<div className="flex overflow-x-auto space-x-8 pb-4 horizontal-scroll">
					{dict.categories.map((category, index) => (
						<div
							key={index}
							className="flex-shrink-0 w-80 bg-ivory p-8 rounded-lg shadow-md"
						>
							<h3 className="font-playfair text-2xl font-bold text-dark-gray mb-6 border-b-2 border-muted-olive pb-2">
								{category.title}
							</h3>
							<ul className="space-y-4">
								{category.items.map((item, itemIndex) => (
									<li
										key={itemIndex}
										className="flex justify-between items-baseline"
									>
										<span className="text-dark-gray/90">{item.name}</span>
										<span className="font-bold text-muted-olive ml-4 whitespace-nowrap">
											{item.price}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
