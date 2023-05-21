import { ChangeEvent, CSSProperties } from 'react'

export interface ILayout {
	children: JSX.Element
}

export interface IDisplay {
	placeholder?: string,
	FZ: number,
	setValue: (e: ChangeEvent<HTMLInputElement>) => void,
	Value: string
}

export interface ICalculatorDisplay {
	setValue: (e: ChangeEvent<HTMLInputElement>) => void,
	Value: string,
	Result: string,
	setOpenedHistory: () => void,
	GetResult: () => void
}

export interface IKeyboard {
	ops: string[],
	onclick: (e: ((val: string) => string) | string) => void,
	Value: string,
	GetResult: () => void,
	but?: string
}

export interface IButton {
	color: string,
	bg: string,
	children: string,
	onclick: () => void,
	height: string,
	dopClass: string
}

export interface ICalcButton {
	value: string,
	ops: string[],
	onclick: () => void,
	coloredButtons: string[],
}

export interface CustomCSS extends CSSProperties {
	'--number'?: string
}