"use client";
import AccordionItem from "./AccordionItem";

export default function FAQ({ dict }) {
	return (
		<section id="faq" className="py-20 sm:py-32 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
				<h2 className="font-playfair text-4xl sm:text-5xl font-bold text-muted-olive text-center mb-12">
					{dict.title}
				</h2>
				<div className="space-y-4">
					{dict.items.map((item, index) => (
						<AccordionItem key={index} question={item.q} answer={item.a} />
					))}
				</div>
			</div>
		</section>
	);
}
