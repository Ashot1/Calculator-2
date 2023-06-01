import styles from './ConverterFavoriteList.module.sass'
import { FC, memo, useState } from 'react'
import { ConverterBasicListText } from '../../Localisation.ts'
import ConverterList from '../../ENTITIES/ConverterList/ConverterList.tsx'
import { CustomCSS, ValuteType } from '../../interfaces.ts'
import FavoriteListContent from '../../WIDGETS/FavoriteListContent/FavoriteListContent.tsx'
import LoadingListItem from '../../ENTITIES/LoadingListItem/LoadingListItem.tsx'

const ConverterFavoriteList: FC<{lang: string, Valute: ValuteType, setFavList: (arg: string) => void, FavList: string}> = ({lang, Valute, FavList, setFavList}) => {

	if(!FavList) return (
		<>
			<Name fz={lang === 'ru' ? 10 : 8}>{ConverterBasicListText(lang).Favorite}</Name>
			<h2>Список пуст. При следующем обновлении страницы сюда добавяться стандартные валюты</h2>
		</>
	)

	return (
		<div className={styles.FavoriteWrap}>
			<Name fz={lang === 'ru' ? 9.5 : 7.5}>{ConverterBasicListText(lang).Favorite}</Name>
			<ConverterList>
				<FavoriteListContent setFavList={setFavList} Valute={Valute} lang={lang} FavList={FavList}/>
			</ConverterList>
		</div>
	)
}

export default ConverterFavoriteList


const Name: FC<{children: string, fz: number}> = memo(function Name({children, fz}){
	return (
		<div className={styles.NamePosition} style={{'--FZ': `${fz}ch`} as CustomCSS}>
			<h1>{children}</h1>
		</div>
	)
})