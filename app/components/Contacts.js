"use client";
import {
	Phone,
	MapPin,
	Clock,
	Instagram,
	Facebook,
	Youtube,
} from "lucide-react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Contacts({ dict }) {
	// Координаты для маркера на карте (заглушка)
	const position = { lat: 50.4501, lng: 30.5234 }; // Центр Киева

	return (
		<section id="contacts" className="py-20 sm:py-32 bg-ivory">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
					{/* Левая колонка с информацией */}
					<div>
						<h2 className="font-playfair text-4xl sm:text-5xl font-bold text-muted-olive mb-8">
							{dict.title}
						</h2>
						<div className="space-y-4 text-lg text-dark-gray">
							<p className="flex items-center">
								<MapPin className="w-6 h-6 mr-3 text-terracotta" />
								{dict.address}
							</p>
							<a
								href="tel:+380991234567"
								className="flex items-center text-terracotta hover:opacity-80 transition-opacity"
							>
								<Phone className="w-6 h-6 mr-3" />
								{dict.phone}
							</a>
							<p className="flex items-center">
								<Clock className="w-6 h-6 mr-3 text-terracotta" />
								{dict.hours}
							</p>
						</div>
						<div className="mt-8 flex space-x-4">
							<a
								href="#"
								className="text-muted-olive hover:text-terracotta transition-colors"
							>
								<Instagram size={28} />
							</a>
							<a
								href="#"
								className="text-muted-olive hover:text-terracotta transition-colors"
							>
								<Facebook size={28} />
							</a>
							<a
								href="#"
								className="text-muted-olive hover:text-terracotta transition-colors"
							>
								<Youtube size={28} />
							</a>
						</div>
					</div>

					{/* Правая колонка с картой */}
					<div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
						{/*
              ИНТЕГРАЦИЯ GOOGLE MAPS:
              1. Установите библиотеку: npm install @vis.gl/react-google-maps
              2. Получите API-ключ в Google Cloud Console.
              3. Создайте файл .env.local в корне проекта.
              4. Добавьте в него ваш ключ: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="ВАШ_КЛЮЧ_ЗДЕСЬ"
              5. Перезапустите сервер разработки (npm run dev).
              6. Компонент APIProvider автоматически подхватит ключ из переменных окружения.
            */}
						<APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
							<Map
								defaultCenter={position}
								defaultZoom={15}
								gestureHandling={"greedy"}
								disableDefaultUI={true}
								mapId={"a3a3a3a3a3a3a3a3"} // Пример ID для кастомизации стиля карты
							>
								{/* Вы можете добавить маркер сюда, если нужно */}
							</Map>
						</APIProvider>
					</div>
				</div>
			</div>
		</section>
	);
}
