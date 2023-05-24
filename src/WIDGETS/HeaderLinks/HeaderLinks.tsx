import styles from './HeaderLinks.module.sass'
import { FC } from 'react'
import HeaderLink from '../../ENTITIES/HeaderLink/HeaderLink'
import { HeaderText } from '../../Localisation'


const HeaderLinks: FC<{ lang: string }> = ({ lang }) => {
	const text = HeaderText(lang)
	return (
		<nav className={styles.links}>
			<HeaderLink link={`/${lang}/calculator`}>{text.LinkCalc}</HeaderLink>
			{/*<HeaderLink link={`/${lang}/converter`}>{text.LinkConv}</HeaderLink>*/}
		</nav>
	)
}

export default HeaderLinks
