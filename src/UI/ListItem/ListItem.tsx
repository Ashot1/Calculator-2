import styles from './ListItem.module.sass'
import { FC, ReactNode } from 'react'

const ListItem: FC<{ dopClass?: string, TopBar: ReactNode, BottomBar: ReactNode, click?: () => void }> = ({ dopClass, TopBar, BottomBar, click}) => {
	return (
		<li className={`${styles.ListItem} ${dopClass}`} onClick={click}>
				{TopBar}
			<section className={styles.Course}>
				{BottomBar}
			</section>
		</li>
	)
}

export default ListItem
