import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer({ dict }) {
	return (
		<footer className="bg-white py-8">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-dark-gray/70">
				<div className="flex justify-center space-x-4 mb-4">
					<a
						href="#"
						className="text-muted-olive hover:text-terracotta transition-colors"
					>
						<Instagram size={24} />
					</a>
					<a
						href="#"
						className="text-muted-olive hover:text-terracotta transition-colors"
					>
						<Facebook size={24} />
					</a>
					<a
						href="#"
						className="text-muted-olive hover:text-terracotta transition-colors"
					>
						<Youtube size={24} />
					</a>
				</div>
				<p>{dict.copy}</p>
			</div>
		</footer>
	);
}
