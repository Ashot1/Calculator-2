import { LocalisationConverterType } from './interfaces'

export const HeaderText: (lang: string) => {LinkCalc: string, LinkConv: string, ButtonCursor: string} = (lang) => {
	if(lang === 'ru') return {
		LinkCalc: 'Калькулятор',
		LinkConv: 'Конвертер',
		ButtonCursor: 'Курсор'
	}

	return {
		LinkCalc: 'Calculator',
		LinkConv: 'Converter',
		ButtonCursor: 'Cursor'
	}
}

export const CalculatorText:  (lang: string) => { History: string, ButtonClear: string} = (lang) => {
	if(lang === 'ru') return {
		History: "История",
		ButtonClear: "Очистить"
	}

	return {
		History: "History",
		ButtonClear: "Clear"
	}
}

export const NotFoundedText: (lang: string) => string = (lang) => {
	if(lang === "ru") return "Страница не найдена"
	return "Page not found"
}

export const ConverterText = (lang: string): LocalisationConverterType => {
	if(lang === 'ru') return {
			RUB: 'Российский рубль',
			AUD: 'Австралийский доллар',
			AZN: 'Азербайджанский манат',
			GBP: 'Фунт стерлингов Соединенного королевства',
			AMD: 'Армянских драмов',
			BYN: 'Белорусский рубль',
			BGN: 'Болгарский лев',
			BRL: 'Бразильский реал',
			HUF: 'Венгерских форинтов',
			VND: 'Вьетнамских донгов',
			HKD: 'Гонконгский доллар',
			GEL: 'Грузинский лари',
			DKK: 'Датская крона',
			AED: 'Дирхам ОАЭ',
			USD: 'Доллар США',
			EUR: 'Евро',
			EGP: 'Египетских фунтов',
			INR: 'Индийских рупий',
			IDR: 'Индонезийских рупий',
			KZT: 'Казахстанских тенге',
			CAD: 'Канадский доллар',
			QAR: 'Катарский риал',
			KGS: 'Киргизских сомов',
			CNY: 'Китайский юань',
			MDL: 'Молдавских леев',
			NZD: 'Новозеландский доллар',
			NOK: 'Норвежских крон',
			PLN: 'Польский злотый',
			RON: 'Румынский лей',
			XDR: 'СДР (специальные права заимствования)',
			SGD: 'Сингапурский доллар',
			TJS: 'Таджикских сомони',
			THB: 'Таиландских батов',
			TRY: 'Турецких лир',
			TMT: 'Новый туркменский манат',
			UZS: 'Узбекских сумов',
			UAH: 'Украинских гривен',
			CZK: 'Чешских крон',
			SEK: 'Шведских крон',
			CHF: 'Швейцарский франк',
			RSD: 'Сербских динаров',
			ZAR: 'Южноафриканских рэндов',
			KRW: 'Вон Республики Корея',
			JPY: 'Японских иен',
		}

	return {
			RUB: 'Russian ruble',
			AUD: 'Australian dollar',
			AZN: 'Azerbaijani manat',
			GBP: 'United Kingdom Pound Sterling',
			AMD: 'Armenian dram',
			BYN: 'Belarusian ruble',
			BGN: 'Bulgarian Lev',
			BRL: 'Brazilian Real',
			HUF: 'Hungarian forint',
			VND: 'Vietnamese dong',
			HKD: 'Hong Kong dollar',
			GEL: 'Georgian lari',
			DKK: 'Danish krone',
			AED: 'UAE Dirham',
			USD: 'US Dollar',
			EUR: 'Euro',
			EGP: 'Egyptian pounds',
			INR: 'Indian rupees',
			IDR: 'Indonesian Rupiah',
			KZT: 'Kazakh tenge',
			CAD: 'Canadian dollar',
			QAR: 'Qatari rial',
			KGS: 'Kyrgyz soms',
			CNY: 'Chinese Yuan',
			MDL: 'Moldavian lei',
			NZD: 'New Zealand dollar',
			NOK: 'Norwegian krone',
			PLN: 'Polish Zloty',
			RON: 'Romanian leu',
			XDR: 'SDR (Special Drawing Rights)',
			SGD: 'Singapore dollar',
			TJS: 'Tajik somoni',
			THB: 'Thai baht',
			TRY: 'Turkish Lira',
			TMT: 'New Turkmen manat',
			UZS: 'Uzbek sum',
			UAH: 'Ukrainian hryvnia',
			CZK: 'CZK',
			SEK: 'Swedish kroner',
			CHF: 'Swiss Franc',
			RSD: 'Serbian dinars',
			ZAR: 'South African rand',
			KRW: 'Won Republic of Korea',
			JPY: 'Japanese yen',
		}
}

export const ConverterBasicListText = (lang: string): {Favorite: string, Search: string} => {
	if(lang === 'ru') return {
		Favorite: 'Избранное',
		Search: 'Поиск'
	}
	return {
		Favorite: 'Favorites',
		Search: 'Search'
	}
}
