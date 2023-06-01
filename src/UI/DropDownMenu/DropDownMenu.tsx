import styles from './DropDownMenu.module.sass'
import { FC, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Await } from 'react-router-dom'
import LoadingElement from '../LoadingElement/LoadingElement'
import { IDropDown } from '../../interfaces'


const DropDownMenu: FC<IDropDown> = ({h, fullname, SuspensePromise, isOpen, setIsOpen, list}) => {

	return (
		<div className={styles.Wrapper}>
			<div className={`${styles.CurrentValute} ${isOpen ? styles.CurrentValueActive : ''}`} onClick={setIsOpen}>
				<div className={styles.TopMenu}>
					<Suspense fallback={<LoadingElement text='RUB' />}>
						<Await resolve={SuspensePromise}>
							<h1>{h}</h1>
						</Await>
					</Suspense>
					<motion.span animate={{rotate: isOpen ? 0 : 180}} className={styles.Arrow}></motion.span>
				</div>
				<Suspense fallback={<LoadingElement text="Российский рубль"/>}>
					<Await resolve={SuspensePromise}>
						<p>{fullname}</p>
					</Await>
				</Suspense>
			</div>
			<AnimatePresence>
				{isOpen && <motion.div initial={{opacity: 0, translateY: -15}} animate={{ opacity: 1, translateY: 0 }} exit={{opacity: 0, translateY: -10}} className={styles.DropDown}>
					<ul>
						{list}
					</ul>
				</motion.div>}
			</AnimatePresence>
		</div>
	)
}

export default DropDownMenu
