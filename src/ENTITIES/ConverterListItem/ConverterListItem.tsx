import styles from './ConverterListItem.module.sass'
import { FC } from 'react'
import ListItem from '../../UI/ListItem/ListItem.tsx'
import Arrow from '../../ASSETS/left-arrow.png'

const ConverterListItem: FC<{percent: number,
							title: string,
							FullTitle: string,
							newCourse: number,
							oldCourse: number,
							click: () => void}> = ({percent,
													FullTitle,
													title,
													newCourse,
													oldCourse,
													click}) => {

	const TopBar =
		<section className={styles.ValuteInfo}>
			<div>
				<h3>{title}</h3>
				<h6>{FullTitle}</h6>
			</div>
			<span className={styles.percent} style={{color: percent > 0 ? 'green' : 'red'}}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20"
				width="20" style={{transform: percent > 0 ? 'rotate(0)' : 'rotate(180deg)'}}>
					<path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
				</svg>
				{percent.toFixed(3)}%
			</span>
		</section>

	const BottomBar =
		<div className={styles.Course}>
			<p className={styles.NewData}>{newCourse.toFixed(4)} ₽</p>
			<p className={styles.pastData}><b><img src={Arrow} alt=""/></b>
				{oldCourse.toFixed(4)} ₽
			</p>
		</div>

	return (
		<ListItem dopClass={styles.FavoriteItem} TopBar={TopBar} BottomBar={BottomBar} click={click}/>
	)
}

export default ConverterListItem
