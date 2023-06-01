import styles from './List.module.sass'
import { FC, ReactNode } from 'react'

const List: FC<{children: ReactNode, dopClass?: string}> = ({children, dopClass}) => {
	return (
		<ul className={`${styles.List} ${dopClass}`}>
			{children}
		</ul>
	)
}

export default List
