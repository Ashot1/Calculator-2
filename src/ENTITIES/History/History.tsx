import styles from './History.module.sass'
import { FC } from 'react'
import { CustomCSS } from '../../INTERFACES/interfaces'

const HistoryUL: FC<{Hist: string[], onclick: (item: string) => void}> = ({Hist, onclick}) => {
	const SetProperty: CustomCSS = {'--number': `${Hist.length + 1}`}
	return (
		<ul className={styles.List} style={SetProperty}>
			{Hist.map((item, index) => (
				<li key={index} onClick={() => onclick(item.split(' = ')[0])}>{item}</li>
			))}
		</ul>
	)
}

export default HistoryUL
