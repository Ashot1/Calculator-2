import styles from './Cursor.module.sass'
import { FC, useEffect, useState } from 'react'

const Cursor: FC = () => {
	const [Pos, setPos] = useState<number[]>([])

	useEffect(() => {
		document.addEventListener('mousemove', (e) => {
			const x: number = e.clientX,
				y: number = e.clientY
			setPos([x, y])
		})
	}, [])

	return (
		<>
			<article style={{ translate: `${Pos[0]}px ${Pos[1]}px` }} className={styles.CenterDot}></article>
			<article style={{ translate: `${Pos[0]}px ${Pos[1]}px` }} className={styles.Dot}></article>
		</>
	)
}

export default Cursor
