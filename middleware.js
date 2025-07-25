/* Этот файл будет управлять перенаправлением для мультиязычности.*/
import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["ru", "en"];
export let defaultLocale = "ru";

function getLocale(request) {
	const negotiatorHeaders = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

	return match(languages, locales, defaultLocale);
}

export function middleware(request) {
	const PUBLIC_FILE = /\.(.*)$/;
	const pathname = request.nextUrl.pathname;

	if (
		pathname.startsWith("/_next") ||
		pathname.startsWith("/images") ||
		pathname.includes("/api") ||
		PUBLIC_FILE.test(pathname)
	) {
		return;
	}

	const pathnameIsMissingLocale = locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
	}
}

export const config = {
	matcher: [
		// Пропускаем системные папки Next.js
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
