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
	but?: string,
	lang?: string
}

export interface IHistoryList {
	History: string[],
	setHistory: (Array: any[]) => void,
	setValue: (item: string) => void,
	lang: string
}

export interface IButton {
	color: string,
	bg: string,
	children: string | JSX.Element | string[] | JSX.Element[],
	onclick: () => void,
	dopClass?: string
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

export interface IHeaderButton{
	children: any,
	onclick: () => void,
	dopClass?: string
}

export interface ICursor{
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	Display: string,
	Position: string }