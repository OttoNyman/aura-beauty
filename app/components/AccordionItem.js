"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({ question, answer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-light-sage">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex justify-between items-center text-left py-4"
			>
				<span className="text-lg font-semibold text-dark-gray">{question}</span>
				<ChevronDown
					className={`w-6 h-6 text-muted-olive transform transition-transform duration-300 ${
						isOpen ? "rotate-180" : ""
					}`}
				/>
			</button>
			{/* Плавное раскрытие реализуется через max-height.
        Когда isOpen, max-height становится достаточно большим, чтобы вместить контент.
        Когда !isOpen, max-height равен 0, и контент скрывается.
        Transition на max-height создает эффект плавного раскрытия/схлопывания.
      */}
			<div
				className={`overflow-hidden transition-all duration-500 ease-in-out ${
					isOpen ? "max-h-96" : "max-h-0"
				}`}
			>
				<div className="pb-4 text-dark-gray/80">
					<p>{answer}</p>
				</div>
			</div>
		</div>
	);
}
