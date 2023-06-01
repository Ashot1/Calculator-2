import styles from './ErrorPage.module.sass'
import { FC } from 'react'

const ErrorPage: FC = () => {
	return (
		<h2 className={styles.huy}>
			Ошибка загрузки данных
		</h2>
	)
}

export default ErrorPage
