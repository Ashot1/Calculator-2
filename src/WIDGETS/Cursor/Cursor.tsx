import { FC, useEffect, useState } from 'react'
import CursorAppearance from '../../UI/CursorAppearance/CursorAppearance'

const Cursor: FC = () => {
	const [Pos, setPos] = useState<number[]>([]),
		TouchDisplay: boolean | number = "ontouchstart" in window || navigator.maxTouchPoints,
		cursorData = localStorage.getItem("cursor"),
		[Cursor, setCursor] = useState<string>(cursorData || "dot")

	useEffect(() => {
		const cursorData = localStorage.getItem("cursor")
		if(cursorData) setCursor(cursorData)
	}, [cursorData])

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
		<CursorAppearance x1={Pos[0]} y1={Pos[1]} x2={Pos[0]} y2={Pos[1]} Display={!TouchDisplay && Cursor === "dot" ? 'block' : 'none' } Position="absolute"/>
	)
}

export default Cursor
