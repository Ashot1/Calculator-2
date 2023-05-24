import styles from './HeaderParameters.module.sass'
import { FC } from 'react'
import WinCursorDefault from '../../ASSETS/Asset 1cur.png'
import HeaderButton from '../../ENTITIES/HeaderButton/HeaderButton'
import CursorAppearance from '../../UI/CursorAppearance/CursorAppearance'
import { useNavigate, useLocation } from 'react-router-dom'
import { HeaderText } from '../../Localisation'

const HeaderParameters: FC = () => {
	const cursor: string | null = localStorage.getItem('cursor'),
		navigate = useNavigate(),
		location = useLocation(),
		path: string[] = location.pathname.split('/'),
		anotherLanguage: string = path[1] === "ru" ? "en" : "ru",
		text = HeaderText(path[1])

	return (
		<aside className={styles.parameters}>
			<HeaderButton onclick={() => {
				localStorage.setItem('cursor', cursor === 'dot' ? 'default' : 'dot')
				window.location.reload()
			}} dopClass={styles.CursorChange}>
				{text.ButtonCursor}
				{cursor === 'default' ? <img alt='' src={WinCursorDefault} /> : <CursorAppearance Display="block" x1={14} y1={0} x2={-14} y2={0} Position="center"/>}
			</HeaderButton>
			<HeaderButton onclick={() => {
				navigate(`/${anotherLanguage}/${path[2]}`)
			}} dopClass={styles.lang}>{anotherLanguage}</HeaderButton>
		</aside>
	)
}

export default HeaderParameters
