"use client";
import { useState } from "react";
import { Phone, Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ lang, dict }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const currentLang = pathname.split("/")[1];

	const navLinks = [
		{ href: "#about", label: dict.about },
		{ href: "#services", label: dict.services },
		{ href: "#prices", label: dict.prices },
		{ href: "#portfolio", label: dict.portfolio },
		{ href: "#faq", label: dict.faq },
		{ href: "#contacts", label: dict.contacts },
	];

	const getLocalizedPath = (locale) => {
		const newPath = pathname.replace(`/${currentLang}`, `/${locale}`);
		return newPath;
	};

	return (
		<header className="bg-ivory/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Логотип */}
					<div className="flex-shrink-0">
						<a
							href="#hero"
							className="text-2xl font-playfair font-bold text-muted-olive"
						>
							Aura Beauty
						</a>
					</div>

					{/* Навигация для десктопа */}
					<nav className="hidden md:flex md:space-x-8">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="font-roboto text-dark-gray hover:text-muted-olive transition-colors duration-300"
							>
								{link.label}
							</a>
						))}
					</nav>

					{/* Иконки справа */}
					<div className="hidden md:flex items-center space-x-4">
						<a
							href="tel:+380991234567"
							className="flex items-center text-terracotta hover:opacity-80 transition-opacity"
						>
							<Phone size={18} className="mr-2" />
							<span>+38 (099) 123-45-67</span>
						</a>
						<div className="relative group">
							<Globe size={20} className="text-dark-gray cursor-pointer" />
							<div className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<Link
									href={getLocalizedPath("ru")}
									className={`block px-4 py-2 text-sm ${
										currentLang === "ru"
											? "font-bold text-terracotta"
											: "text-dark-gray"
									}`}
								>
									RU
								</Link>
								<Link
									href={getLocalizedPath("en")}
									className={`block px-4 py-2 text-sm ${
										currentLang === "en"
											? "font-bold text-terracotta"
											: "text-dark-gray"
									}`}
								>
									EN
								</Link>
							</div>
						</div>
					</div>

					{/* Кнопка мобильного меню */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-dark-gray"
						>
							{isMenuOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Мобильное меню */}
			{isMenuOpen && (
				<div className="md:hidden bg-ivory pb-4">
					<nav className="flex flex-col items-center space-y-4">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setIsMenuOpen(false)}
								className="font-roboto text-lg text-dark-gray hover:text-muted-olive transition-colors duration-300"
							>
								{link.label}
							</a>
						))}
						<a
							href="tel:+380991234567"
							className="flex items-center text-terracotta hover:opacity-80 transition-opacity pt-4"
						>
							<Phone size={18} className="mr-2" />
							<span>+38 (099) 123-45-67</span>
						</a>
						<div className="flex space-x-4 pt-2">
							<Link
								href={getLocalizedPath("ru")}
								className={`px-2 py-1 text-sm ${
									currentLang === "ru"
										? "font-bold text-terracotta"
										: "text-dark-gray"
								}`}
							>
								RU
							</Link>
							<Link
								href={getLocalizedPath("en")}
								className={`px-2 py-1 text-sm ${
									currentLang === "en"
										? "font-bold text-terracotta"
										: "text-dark-gray"
								}`}
							>
								EN
							</Link>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
