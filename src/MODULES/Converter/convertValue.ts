import { IConvertFunction } from '../../interfaces.ts'

const ConvertValue: IConvertFunction = (valuefrom, nominalfrom, nominalto) => {
	const IntValueFrom = parseFloat(valuefrom)
	const ConvertedValute = (IntValueFrom / nominalto * nominalfrom)

	return parseFloat(ConvertedValute.toFixed(3)).toString()
}

export default ConvertValue