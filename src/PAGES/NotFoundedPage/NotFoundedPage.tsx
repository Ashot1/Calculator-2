import styles from './NotFounded.module.sass'
import { FC } from 'react'
import { NotFoundedText } from '../../Localisation'
import { useParams } from 'react-router-dom'

const NotFoundedPage: FC = () => {
	const params = useParams()
	let lang = params.lang
	if(lang === undefined) lang = navigator.language

	return (
		<h1 className={styles.huy}>
			{NotFoundedText(lang)}
		</h1>
	)
}

export default NotFoundedPage
