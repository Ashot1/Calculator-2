import styles from './ValueHolder.module.sass'
import { FC } from 'react'
import TransparentInput from '../../UI/TransparentInput/TransparentInput'
import { IValueHolder } from '../../interfaces'
import ConverterDropDownMenu from '../ConverterDropDownMenu/ConverterDropDownMenu'

const ValueHolder: FC<IValueHolder> = ({value,
										setValue,
										Valute,
										ValuteParams,
										isOpen,
										setIsOpen,
										setValuteParams,
										lang,
										id}) => {
	return (
		<div className={styles.ValueHolder}>
			<ConverterDropDownMenu Valute={Valute} ValuteParams={ValuteParams} isOpen={isOpen} setIsOpen={setIsOpen} setValuteParams={setValuteParams} lang={lang} id={id}/>
			<div className={styles.input}>
				<TransparentInput type="number" placeholder="0" FZ={1} setValue={setValue} Value={value}/>
			</div>
		</div>
	)
}

export default ValueHolder
