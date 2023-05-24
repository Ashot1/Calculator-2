import styles from './Header.module.sass'
import { FC } from 'react'
import HeaderParameters from '../../WIDGETS/HeaderParameters/HeaderParameters'
import HeaderLinks from '../../WIDGETS/HeaderLinks/HeaderLinks'
import { useParams } from 'react-router-dom'

const Header: FC = () => {
	const params = useParams()

	if(params.lang === undefined) return <h2>Ошибка</h2>

	return (
		<header className={styles.header}>
			<section className={styles.content}>
				<HeaderLinks lang={params.lang}/>
				<HeaderParameters/>
			</section>
		</header>
	)
}

export default Header
