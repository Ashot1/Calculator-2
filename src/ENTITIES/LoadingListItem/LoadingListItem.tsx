import styles from './LoadingListItem.module.sass'
import { FC } from 'react'
import ListItem from '../../UI/ListItem/ListItem.tsx'
import Arrow from '../../ASSETS/left-arrow.png'
import LoadingElement from '../../UI/LoadingElement/LoadingElement.tsx'

const LoadingListItem: FC = () => {

	const TopBar =
		<section className={styles.ValuteInfo}>
			<div>
				<LoadingElement text={'USD'}/>
				<LoadingElement text={'Доллар США'}/>
			</div>
		</section>

	const BottomBar =
		<div className={styles.Course}>
			<div className={styles.NewData}><LoadingElement text={'80'}/></div>
			<div className={styles.pastData}><b><img src={Arrow} alt=""/></b>
				<LoadingElement text={'79'}/>
			</div>
		</div>

	return (
		<ListItem dopClass={styles.FavoriteItem} TopBar={TopBar} BottomBar={BottomBar}/>
	)
}

export default LoadingListItem
