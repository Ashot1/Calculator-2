import MainLayout from '../../LAYOUTS/MainLayout/MainLayout'
import Calculator from '../../MODULES/Calculator/Calculator'
import { FC } from 'react'

const CalculatorPage: FC = () => {
	return (
		<MainLayout>
			<Calculator/>
		</MainLayout>
	)
}

export default CalculatorPage