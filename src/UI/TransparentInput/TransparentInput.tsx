import { FC } from 'react'
import { IDisplay } from '../../interfaces'
import styles from './TransparentInput.module.sass'

const TransparentInput: FC<IDisplay> = ({placeholder, FZ, setValue, Value, type = 'text', dopClass}) => {
	return (
		<input type={type} placeholder={placeholder} className={`${styles.TransparentInput} ${dopClass}`} style={{fontSize: `${FZ < 2 ? 38 / FZ : 40 / 2}px`}} onChange={setValue} value={Value}/>
	)
}

export default TransparentInput