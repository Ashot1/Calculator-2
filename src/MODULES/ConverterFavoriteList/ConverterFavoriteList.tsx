import styles from './ConverterFavoriteList.module.sass'
import { FC, memo } from 'react'
import { ConverterBasicListText } from '../../Localisation.ts'
import ConverterList from '../../ENTITIES/ConverterList/ConverterList.tsx'
import { ValuteType } from '../../interfaces.ts'
import FavoriteListContent from '../../WIDGETS/FavoriteListContent/FavoriteListContent.tsx'

const ConverterFavoriteList: FC<{lang: string, Valute: ValuteType, setFavList: (arg: string) => void, FavList: string}> = ({lang, Valute, FavList, setFavList}) => {

	if(!FavList) return (
		<>
			<Name>{ConverterBasicListText(lang).Favorite}</Name>
			<h2>Список пуст. При следующем обновлении страницы сюда добавяться стандартные валюты</h2>
		</>
	)

	return (
		<div className={styles.FavoriteWrap}>
			<Name>{ConverterBasicListText(lang).Favorite}</Name>
			<ConverterList>
				<FavoriteListContent setFavList={setFavList} Valute={Valute} lang={lang} FavList={FavList}/>
			</ConverterList>
		</div>
	)
}

export default ConverterFavoriteList


const Name: FC<{children: string}> = memo(function Name({children }){
	return (
		<div className={styles.NamePosition}>
			<h1>{children}</h1>
		</div>
	)
})