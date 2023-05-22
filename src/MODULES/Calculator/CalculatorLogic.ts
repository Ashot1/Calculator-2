
const Calculate: (value: string) => string = (value) => {
	return (new Function('return (' + value + ')')());
}

export const GetResult: (value: string) => string = (value) => {
	const negr: string[] = value.split(/(\(|\)|\+|\-|\*|\/|\√)/)
	const huy: any = negr.map((inp) => {
		return parseFloat(inp)
	})
	for (let i = 0; i < huy.length; i++) {
		if (!huy[i]) huy[i] = negr[i]
	}
	for (let i = 0; i < huy.length; i++) {
		if (huy[i] === '√') {
			if(huy[i + 1] === '(' || huy[i + 2] === '('){
				let Count = 0
				for(let g = 0; g < huy.length - i; g++) {
					if(huy[i + g] === '(') Count = Count + 1
					console.log(Count)
					if(huy[i + g] === ')'){
						Count = Count - 1
						if(!Count) {
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
			console.log(huy)

			huy[i] = ''
			if(typeof huy[i - 1] == 'number'){
				huy[i] = '*'
			}
		}

		if ((huy[i] === '(' && typeof huy[i - 1] == 'number') || (huy[i] === '(' && huy[i - 2] === ')')) {
			huy.splice(i, 0, '*');
		}
		if (huy[i] === ')' && typeof huy[i + 1] == 'number') {
			huy.splice(i + 1, 0, '*');
		}
	}
	if (huy.indexOf('=') > 0) huy[huy.indexOf('=')] = ''

	try {
		return Calculate(huy.join('')).toString()
	} catch (e) {
		return 'Error'
	}
}