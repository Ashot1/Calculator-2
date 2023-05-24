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

export const Calculatortext:  (lang: string) => { History: string, ButtonClear: string} = (lang) => {
	if(lang === 'ru') return {
		History: "История",
		ButtonClear: "Очистить"
	}

	return {
		History: "History",
		ButtonClear: "Clear"
	}
}
