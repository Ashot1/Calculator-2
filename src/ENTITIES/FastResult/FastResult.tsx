import { FC, memo } from 'react'
import Counter from '../../UI/Counter/Counter'
import styles from './fastResult.module.sass'

const FastResult: FC<{Result: string, setOpenedHistory: () => void}> = memo(function FastResult({Result, setOpenedHistory}) {
	return (
		<div className={styles.FastRes} onClick={() => setOpenedHistory()}>
			<Counter Result={Result}/>
		</div>
	)
})

export default FastResult