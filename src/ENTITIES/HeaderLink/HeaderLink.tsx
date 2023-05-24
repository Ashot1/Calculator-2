import styles from './HeaderLink.module.sass'
import { FC, ReactNode } from 'react'
import CustomLink from '../../UI/CustomLink/CustomLink'

const HeaderLink: FC<{ children: ReactNode, link: string }> = ({children, link}) => {
	return (
		<CustomLink link={link} dopClass={styles.HeaderLink}>{children}</CustomLink>
	)
}

export default HeaderLink
