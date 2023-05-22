import { FC, memo } from 'react'
import Counter from '../../UI/Counter/Counter'
import styles from './fastResult.module.sass'
import toast from 'react-hot-toast'

const FastResult: FC<{Result: string, setOpenedHistory: () => void}> = memo(function FastResult({Result}) {
	const Copy: () => void = () => {
		navigator.clipboard.writeText(Result)
		toast('Скопировано!', { icon: '📑'})
	}
	return (
		<div className={styles.FastRes} onClick={Copy}>
			<Counter Result={Result}/>
		</div>
	)
})

export default FastResult