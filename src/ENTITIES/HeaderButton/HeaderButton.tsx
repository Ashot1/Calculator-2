import styles from './HeaderButton.module.sass'
import { FC } from 'react'
import Button from '../../UI/Button/Button'
import { IHeaderButton } from '../../interfaces'

const HeaderButton: FC<IHeaderButton> = ({ children, onclick, dopClass }) => {
    return (
        <Button onclick={onclick} bg="rgba(255,255,255,0.1)" color="white" dopClass={`${styles.headerButton} ${dopClass}`}>
            {children}
        </Button>
    )
}

export default HeaderButton
