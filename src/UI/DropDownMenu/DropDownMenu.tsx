import styles from './DropDownMenu.module.sass'
import { FC } from 'react'

const DropDownMenu: FC = () => {
	return (
		<div className={styles.Wrapper}>
			<div className={styles.CurrentValute}>
				<div className={styles.TopMenu}>
					<h1>RUB</h1>
					<span className={styles.Arrow}></span>
				</div>
				<p>Российский рубль</p>
			</div>
			<div className={styles.DropDown}>
				<ul>
					<li><span>RUB</span> <p>Российский рубль</p></li>
					<li><span>RUB</span> <p>Российский рубль</p></li>
					<li><span>RUB</span> <p>Российский рубль</p></li>
					<li><span>RUB</span> <p>Российский рубль</p></li>
				</ul>
			</div>
		</div>
	)
}

export default DropDownMenu
