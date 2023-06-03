import { createContext, FC, memo, ReactNode } from 'react'

export const MobileContext = createContext<{TouchDisplay: boolean | number, Width768: boolean | number}>({ TouchDisplay: false, Width768: false })

const MobileProvider: FC<{children: ReactNode}> = memo(function MobileProvider({children}) {

	const TouchDisplay: boolean | number = "ontouchstart" in window || navigator.maxTouchPoints

	const Width768 = window.matchMedia('(max-width: 768px)').matches



	return (
		<MobileContext.Provider value={{ TouchDisplay: TouchDisplay, Width768: Width768 }}>
			{children}
		</MobileContext.Provider>
	)
})

export default MobileProvider