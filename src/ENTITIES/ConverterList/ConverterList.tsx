import styles from './ConverterList.module.sass'
import { FC, ReactNode } from 'react'
import List from '../../UI/List/List.tsx'

const ConverterList: FC<{children: ReactNode}> = ({children}) => {
	return (
		<List dopClass={styles.FavoriteList}>
			{children}
		</List>
	)
}

export default ConverterList
