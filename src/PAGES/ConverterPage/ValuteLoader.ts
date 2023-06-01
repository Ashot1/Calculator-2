import axios from 'axios'
import {defer} from 'react-router-dom'


const getValute = async () => {
	const Valutedata = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
	console.log('load')
	return Valutedata.data.Valute
}

const ValuteLoader = async () => {
	return defer({
		Valute: getValute()
	})
}

export default ValuteLoader