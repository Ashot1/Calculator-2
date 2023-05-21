import { FC } from 'react'
import { IDisplay } from '../../INTERFACES/interfaces'
import styles from './TransparentInput.module.sass'

const TransparentInput: FC<IDisplay> = ({placeholder, FZ, setValue, Value}) => {
	return (
		<input type='text' placeholder={placeholder} className={styles.TransparentInput} style={{fontSize: `${FZ < 2 ? 38 / FZ : 40 / 2}px`}} onChange={setValue} value={Value}/>
	)
}

export default TransparentInput