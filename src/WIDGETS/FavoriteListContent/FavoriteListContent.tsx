import { FC, Suspense } from 'react'
import LoadingListItem from '../../ENTITIES/LoadingListItem/LoadingListItem.tsx'
import { Await } from 'react-router-dom'
import { ValuteType } from '../../interfaces.ts'
import ConverterListItem from '../../ENTITIES/ConverterListItem/ConverterListItem.tsx'
import { ConverterText } from '../../Localisation.ts'

const FavoriteListContent: FC<{Valute: ValuteType, setFavList: (arg: string) => void, FavList: string, lang: string}> = ({Valute, FavList, setFavList, lang}) => {

	return (
		<Suspense fallback={<><LoadingListItem/> <LoadingListItem/></>}>
			<Await resolve={Valute}>
				{(Valutes: ValuteType[]) => {
					return Object.values(Valutes)
						.filter(item => FavList.split(',').includes(item.CharCode))
						.map(item => {
								const New = (item.Value / item.Nominal)
								const Old = (item.Previous / item.Nominal)

								const percent = (((New - Old) / Old) * 100)
								const ClickFilter = FavList.split(',').filter(FavItem => FavItem !== item.CharCode)
								return <ConverterListItem
									key={`${item.CharCode}Favorite`}
									FullTitle={ConverterText(lang)[item.CharCode]}
									title={item.CharCode}
									newCourse={item.Value / item.Nominal}
									oldCourse={item.Previous / item.Nominal} percent={percent}
									click={() => {
										setFavList(`${ClickFilter.join(',')}`)
										localStorage.setItem('ConverterList', `${ClickFilter.join(',')}`)
									}}
								/>
							}
						)
				}}
			</Await>
		</Suspense>
	)
}

export default FavoriteListContent
