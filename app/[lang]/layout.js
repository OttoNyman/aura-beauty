import { Playfair_Display, Roboto } from "next/font/google";
import "../globals.css";

// Настройка шрифтов
const playfair = Playfair_Display({
	subsets: ["latin", "cyrillic"],
	display: "swap",
	variable: "--font-playfair",
});
const roboto = Roboto({
	subsets: ["latin", "cyrillic"],
	display: "swap",
	weight: ["300", "400", "700"],
	variable: "--font-roboto",
});

export const metadata = {
	title: "Aura Beauty - Салон Красоты",
	description: "Пространство вашей естественной красоты и гармонии",
};

// Добавлено `async` для соответствия рекомендациям Next.js
export default function RootLayout({ children }) {
	return (
		<html lang="ru" className={`${playfair.variable} ${roboto.variable}`}>
			<body className="bg-ivory text-dark-gray font-roboto">{children}</body>
		</html>
	);
}
