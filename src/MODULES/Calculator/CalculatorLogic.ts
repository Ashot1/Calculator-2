
const Calculate: (value: string) => string = (value) => {
	return (new Function(`return (${value})`)());
}

export const GetResult: (value: string) => string = (value) => {
	const negr: string[] = value.split(/(\(|\)|\+|\-|\*|\/|\√)/)
	const huy: any = negr.map((inp) => {
		return parseFloat(inp)
	})
	for (let i = 0; i < huy.length; i++) {
		if (!huy.at(i)) huy[i] = negr[i]
	}
	for (let i = 0; i < huy.length; i++) {
		if (huy.at(i) === '√') {
			if(huy.at(i + 1) === '(' || huy.at(i + 2) === '('){
				let BracketsCount = 0
				for(let g = 0; g < huy.length - i; g++) {
					if(huy.at(i + g) === '(') BracketsCount = BracketsCount + 1

					if(huy.at(i + g) === ')'){
						BracketsCount = BracketsCount - 1
						if(!BracketsCount) {
							huy.splice(i + g + 1, 0, '**(1/2)')
							break
						}
					}

				}
			} else {
				huy.splice(i + 1, 0, '(')
				huy.splice(i + 3, 0, ')')
				huy.splice(i + 4, 0, '**(1/2)')
			}

			huy[i] = ''
			if(typeof huy.at(i - 1) == 'number'){
				huy[i] = '*'
			}
		}

		if ((huy.at(i) === '(' && typeof huy.at(i - 1) == 'number') || (huy.at(i) === '(' && huy.at(i - 2) === ')')) {
			huy.splice(i, 0, '*');
		}
		if (huy.at(i) === ')' && typeof huy.at(i + 1) == 'number') {
			huy.splice(i + 1, 0, '*');
		}
	}
	if (huy.indexOf('=') > 0) huy[huy.indexOf('=')] = ''

	try {
		return Calculate(huy.join('')).toString()
	} catch (e: unknown) {
		if (e instanceof Error) {
			console.error(e.message);
		} else {
			console.error('Неизвестная ошибка');
		}
		return 'Error'
	}
}