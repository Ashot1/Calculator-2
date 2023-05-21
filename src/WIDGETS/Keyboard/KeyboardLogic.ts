import { IKeyboard } from '../../INTERFACES/interfaces'

export const AddClickFunction = ({ ops, onclick, Value, GetResult, but } : IKeyboard): () => void => {
	const anotherOPS: string[] = ['*', '/']
	const Condition = (!ops.includes(Value.slice(-1)) || Value.slice(-1) === ')') && Value !== '' && (!anotherOPS.includes(Value.slice(-1)))
	let click: () => void = () => onclick((prev: string) => prev + but)

	const ChangeClick: (Value: string) => void= (Value) => {
		click = () => onclick((prev: string) => prev + Value)
	}

	if (ops.includes(<string>but)) if (!Condition) ChangeClick('')

	if (but === '(') ChangeClick(but)

	if (but === ')') {
		if (Condition || Value.slice(-1) === ')') {
			ChangeClick(but)
		} else {
			ChangeClick('')
		}
	}

	if (but === '×') {
		if (!Condition) {
			ChangeClick('')
		} else {
			ChangeClick('*')
		}
	}

	if (but === '÷') {
		if (!Condition) {
			ChangeClick('')
		} else {
			ChangeClick('/')
		}
	}
	if (but === '^') {
		if (!Condition) {
			ChangeClick('')
		} else {
			ChangeClick('**')
		}
	}
	if (but === 'C') click = () => onclick('')

	if (but === '⌫') click = () => onclick(Value.slice(0, -1))

	if (but === '=') {
		if ((!ops.includes(Value.slice(-1)) || Value.slice(-1) === ')')) {
			click = () => GetResult()
		} else {
			ChangeClick('')
		}
	}
	if (but === '√') {
		if (!Condition) {
			ChangeClick('')
		} else {
			ChangeClick('**(1/2)')
		}
	}
	return click
}