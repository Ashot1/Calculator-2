import styles from './ConverterValue.module.sass'
import { FC, useEffect, useState } from 'react'
import ValueHolder from '../../ENTITIES/ValueHolder/ValueHolder'
import { ConverterText } from '../../Localisation'
import { IConvertFunction, ValuteType } from '../../interfaces.ts'

const ConverterValue: FC<{Valute: ValuteType, lang: string, ConvertValue: IConvertFunction}> = ({Valute, lang, ConvertValue}) => {
	const [Value1, setValue1] = useState<string>(''),
		[Value2, setValue2] = useState<string>(''),
		[FirstValute, setFirstValute] = useState({char: 'RUB', name: ConverterText(lang).RUB, nominal: 1}),
		[SecondValute, setSecondValute] = useState({char: 'RUB', name: ConverterText(lang).RUB, nominal: 1}),
		[IsOpen, setIsOpen] = useState({first: false, second: false})

	useEffect(() => {
		setFirstValute({ char: FirstValute.char, name: ConverterText(lang)[FirstValute.char], nominal: FirstValute.nominal })
		setSecondValute({ char: SecondValute.char, name: ConverterText(lang)[SecondValute.char], nominal: SecondValute.nominal })
	}, [lang])

	return (
		<div className={styles.wrapper}>
			<ValueHolder
				setValuteParams={(char, nominal) => setFirstValute({ char: char, name: ConverterText(lang)[char], nominal: nominal })}
				ValuteParams={FirstValute}
				value={Value1}
				setValue={(e) => {
					const value = (e.target as HTMLInputElement)?.value
					setValue1(value)
					setValue2(ConvertValue(value, FirstValute.nominal, SecondValute.nominal))
				}}
				Valute={Valute}
				isOpen={IsOpen.first}
				setIsOpen={() => setIsOpen({first: !IsOpen.first, second: false})}
				lang={lang}
				id={1}/>
			<ValueHolder
				setValuteParams={(char, nominal) => setSecondValute({char: char, name: ConverterText(lang)[char], nominal: nominal})}
				ValuteParams={SecondValute}
				value={Value2}
				setValue={(e) => {
					const value = (e.target as HTMLInputElement)?.value
					setValue2(value)
					setValue1(ConvertValue(value, SecondValute.nominal, FirstValute.nominal))
				}}
				Valute={Valute}
				isOpen={IsOpen.second}
				setIsOpen={() => setIsOpen({first: false, second: !IsOpen.second})}
				lang={lang}
				id={2}/>
		</div>
	)
}

export default ConverterValue
