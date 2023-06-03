import { FC, useContext, useEffect, useState } from 'react'
import CursorAppearance from '../../UI/CursorAppearance/CursorAppearance'
import styles from './Cursor.module.sass'
import { MobileContext } from '../../CONTEXTS/MobileContext.tsx'

const Cursor: FC = () => {
	const [Pos, setPos] = useState<number[]>([]),
		{ TouchDisplay } = useContext(MobileContext),
		cursorData = localStorage.getItem("cursor"),
		[Cursor, setCursor] = useState<string>(cursorData || "dot"),
		[DopClass, setDopClass] = useState<string>()

	useEffect(() => {
		const cursorData = localStorage.getItem("cursor")
		if(cursorData) setCursor(cursorData)
	}, [cursorData])

	useEffect(() => {
		const MouseMove: (e: MouseEvent) => void = (e) => {
			if(!TouchDisplay && Cursor === 'dot'){
				const x: number = e.clientX,
					y: number = e.clientY
				setPos([x, y])
				if(e.target && (e.target as HTMLElement).closest('button')){
					setDopClass(styles.active)
				} else {
					setDopClass('')
				}
			}
		}
		document.addEventListener('mousemove', MouseMove)

		return () => document.removeEventListener('mousemove', MouseMove)
	}, [])

	return (
		<CursorAppearance x1={Pos[0]} y1={Pos[1]} x2={Pos[0]} y2={Pos[1]} Display={!TouchDisplay && Cursor === "dot" ? 'block' : 'none' } Position="absolute" DopClass={DopClass}/>
	)
}

export default Cursor
