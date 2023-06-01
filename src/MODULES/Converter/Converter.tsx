import styles from './Converter.module.sass'
import { FC } from 'react'
import ConverterValue from '../../WIDGETS/ConverterValue/ConverterValue'
import { ValuteType } from '../../interfaces.ts'
import ConvertValue from './convertValue.ts'

const Converter: FC<{Valute: ValuteType, lang: string}> = ({Valute, lang}) => {

	return (
		<div className={styles.Wrapper}>
			<ConverterValue Valute={Valute} lang={lang} ConvertValue={ConvertValue}/>
		</div>
	)
}

export default Converter
