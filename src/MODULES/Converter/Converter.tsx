import styles from './Converter.module.sass'
import { FC } from 'react'
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu'

const Converter: FC = () => {
	return (
		<div className={styles.Wrapper}>
			<DropDownMenu/>
		</div>
	)
}

export default Converter
