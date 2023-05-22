import styles from './Cursor.module.sass'
import { FC, useEffect, useState } from 'react'

const Cursor: FC = () => {
	const [Pos, setPos] = useState<number[]>([]),
		TouchDisplay: boolean | number = "ontouchstart" in window || navigator.maxTouchPoints

	useEffect(() => {
		const MouseMove: (e: MouseEvent) => void = (e) => {
			const x: number = e.clientX,
				y: number = e.clientY
			setPos([x, y])
		}
		if(!TouchDisplay){
			document.addEventListener('mousemove', MouseMove)
		} else {
			document.removeEventListener('mousemove', MouseMove)
		}
	}, [TouchDisplay])

	return (
		<>
			<article style={{ translate: `${Pos[0]}px ${Pos[1]}px`, display: TouchDisplay ? 'none' : 'block' }} className={styles.CenterDot}></article>
			<article style={{ translate: `${Pos[0]}px ${Pos[1]}px`,  display: TouchDisplay ? 'none' : 'block' }} className={styles.Dot}></article>
		</>
	)
}

export default Cursor
