import styles from './LoadingElement.module.sass'
import { FC } from 'react'

const LoadingElement: FC<{text: string}> = ({text}) => {
	return (
		<h1 className={styles.LoadingText}>{text}</h1>
	)
}

export default LoadingElement
