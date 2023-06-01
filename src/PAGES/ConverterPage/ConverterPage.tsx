import { FC, useState } from 'react'
import Converter from '../../MODULES/Converter/Converter'
import {useLoaderData} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { IValute } from '../../interfaces.ts'
import ConverterFavoriteList from '../../MODULES/ConverterFavoriteList/ConverterFavoriteList.tsx'
import ConverterBasicList from '../../MODULES/ConverterBasicList/ConverterBasicList.tsx'
import styles from './Converter.module.sass'

const ConverterPage: FC = () => {
	const { Valute } = useLoaderData() as IValute,
		params = useParams()
	let lang = params.lang
	if(lang === undefined) lang = navigator.language

	const [FavList, setFavList] = useState(localStorage.getItem('ConverterList') || 'USD,EUR')

	return (
		<div className={styles.PageWrapper}>
			<Converter Valute={Valute} lang={lang}/>
			<ConverterFavoriteList lang={lang} Valute={Valute} FavList={FavList} setFavList={setFavList}/>
			<ConverterBasicList lang={lang} Valute={Valute} FavList={FavList} setFavList={setFavList}/>
		</div>
)
}

export default ConverterPage