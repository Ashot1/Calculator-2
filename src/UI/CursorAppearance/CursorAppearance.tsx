import styles from './CursorAppearance.module.sass'
import { FC } from 'react'
import { ICursor } from '../../interfaces'

type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';

const CursorAppearance: FC<ICursor> = ({x1, y1, x2, y2, Display, Position, DopClass}) => {
	return (
		<>
			<article style={{ translate: `${x1}px ${y1}px`, display: Display, position: Position as Position }} className={styles.CenterDot}></article>
			<article style={{ translate: `${x2}px ${y2}px`,  display: Display, position: Position as Position }} className={`${styles.Dot} ${DopClass}`}></article>
		</>
	)
}

export default CursorAppearance
