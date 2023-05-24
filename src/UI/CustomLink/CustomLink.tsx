import styles from './CustomLink.module.sass'
import { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const CustomLink: FC<{ link: string, dopClass?: string, children: ReactNode}> = ({ link, dopClass, children }) => {
	return (
		<NavLink className={`${styles.linkBtn} ${dopClass}`} to={link}>{children}</NavLink>
	)
}

export default CustomLink
