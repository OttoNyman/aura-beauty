import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import ArtMusicCanvas from "../components/ArtMusicCanvas";

// Динамический импорт словаря для серверного компонента
const dictionaries = {
	en: () =>
		import("../../dictionaries/en.json").then((module) => module.default),
	ru: () =>
		import("../../dictionaries/ru.json").then((module) => module.default),
};

export async function generateStaticParams() {
	return [{ lang: "en" }, { lang: "ru" }];
}

async function getDictionary(lang) {
	return dictionaries[lang]();
}

export default async function Home(props) {
	const params = await props.params;
	const lang = await params.lang;
	const dict = await getDictionary(lang);

	return (
		<main className="relative">
			<Header lang={lang} dict={dict.header} />
			<Hero dict={dict.hero} />
			<ArtMusicCanvas dict={dict.artMusic} />
			<AboutUs dict={dict.about} />
			<Services dict={dict.services} />
			<Prices dict={dict.prices} />
			<Portfolio dict={dict.portfolio} />
			<FAQ dict={dict.faq} />
			<Contacts dict={dict.contacts} />
			<Footer dict={dict.footer} />
		</main>
	);
}
