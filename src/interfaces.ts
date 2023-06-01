import { ChangeEvent, CSSProperties, ReactNode } from 'react'

export interface ILayout {
	children: ReactNode,
	center?: boolean
}

export interface IDisplay {
	placeholder?: string,
	FZ: number,
	setValue: (e: ChangeEvent<HTMLInputElement>) => void,
	Value: string,
	type?: string,
	dopClass?: string
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
	'--number'?: string,
	'--fz'?: string
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
	Position: string,
	DopClass?: string
}

export type LocalisationConverterType = { [key: string]: string }

export type ValuteType = {CharCode: string, ID: string, Name: string, Nominal: number, NumCode: string, Previous: number, Value: number }

export type FormatedValuteType = {
	ID: string,
	NumCode: string,
	CharCode: string,
	Nominal: number,
	Name: string,
}

export interface IValute {
	[key: string]: ValuteType
}

export interface IValueHolder extends IOpenStatus{
	value: string,
	setValue: (e: ChangeEvent<HTMLInputElement>) => void,
	Valute: ValuteType,
	ValuteParams: {char: string, name: string, nominal: number},
	lang: string,
	id: number
}

export interface IDropDown extends IOpenStatus{
	h: string,
	fullname: string,
	SuspensePromise?: ValuteType,
	list: ReactNode
}

export interface IConverterDropDown extends IOpenStatus{
	Valute: ValuteType,
	ValuteParams: {char: string, name: string, nominal: number},
	lang: string,
	id: number
}

export interface IOpenStatus {
	setValuteParams: (char: string, nominal: number) => void,
	isOpen: boolean,
	setIsOpen: () => void
}

export type IConvertFunction = (valuefrom: string, nominalfrom: number, nominalto: number) => string
