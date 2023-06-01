import styles from './ConverterDropDownMenu.module.sass'
import { FC, Suspense, useEffect, useState } from 'react'
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu'
import { IConverterDropDown, ValuteType } from '../../interfaces'
import LoadingElement from '../../UI/LoadingElement/LoadingElement'
import { Await } from 'react-router-dom'
import TransparentInput from '../../UI/TransparentInput/TransparentInput'
import { ConverterText } from '../../Localisation.ts'

const ConverterDropDownMenu: FC<IConverterDropDown> = ({Valute,
														ValuteParams,
														isOpen,
														setIsOpen,
														setValuteParams,
														lang,
														id}) => {

	const [Search, setSearch] = useState<string>(''),
		[InputSearch, setInputSearch] = useState<string>(''),
		text = ConverterText(lang)

	useEffect(() => {
		const debounce = setInterval(() => {
			setSearch(InputSearch)
		}, 500)

		return () => clearInterval(debounce)
	}, [InputSearch])

	const DroppedMen =
			<>
				<div className={styles.Search}>
					<TransparentInput placeholder="USD" type="search" FZ={1} setValue={(e) => setInputSearch(e.target.value)} Value={InputSearch}/>
				</div>
				<li onClick={() => {
					setValuteParams('RUB', 1)
					setIsOpen()
				}} key={`RUB${id}`}>RUB - {text.RUB}</li>
				<Suspense fallback={<LoadingElement text="RUB - Российский рубль"/>}>
					<Await resolve={Valute}>
						{(Valutes: ValuteType[]) => (
							Object.values(Valutes)
							.filter(item => (item.CharCode + text[item.CharCode]).toLowerCase().includes(Search.toLowerCase()))
							.map((item): JSX.Element => (
								<li onClick={() => {
									setValuteParams(item.CharCode, item.Value / item.Nominal)
									setIsOpen()
								}} key={`${item.CharCode}${id}`}>{item.CharCode} - {text[item.CharCode]}</li>
						)))}
					</Await>
				</Suspense>
			</>

	return (
		<DropDownMenu list={DroppedMen} SuspensePromise={Valute} h={ValuteParams.char} fullname={ValuteParams.name} isOpen={isOpen} setIsOpen={setIsOpen} setValuteParams={setValuteParams}/>
	)
}


export default ConverterDropDownMenu
