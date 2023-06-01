import { FC, Suspense, useEffect, useState } from 'react'
import LoadingListItem from '../../ENTITIES/LoadingListItem/LoadingListItem.tsx'
import { Await } from 'react-router-dom'
import { ValuteType } from '../../interfaces.ts'
import ConverterListItem from '../../ENTITIES/ConverterListItem/ConverterListItem.tsx'
import { ConverterText } from '../../Localisation.ts'

const BasicListContent: FC<{Valute: ValuteType, lang: string, setFavList: (arg: string) => void, FavList: string, search: string}> = ({Valute, lang, FavList, setFavList, search}) => {

	const [Search, setSearch] = useState('')

	useEffect(() => {
		const Debounce = setTimeout(() => {
			setSearch(search)
		}, 500)

		return () => clearTimeout(Debounce)
	},[search])
	return (
		<Suspense fallback={<><LoadingListItem/> <LoadingListItem/></>}>
			<Await resolve={Valute}>
				{(Valutes: ValuteType[]) => {
					return Object.values(Valutes)
						.filter(item => item.CharCode.concat(ConverterText(lang)[item.CharCode]).toLowerCase().includes(Search.toLowerCase()))
						.map(item => {
								const New= (item.Value / item.Nominal)
								const Old= (item.Previous / item.Nominal)

								const percent= (((New - Old) / Old) * 100)
								const ClickFilter= FavList.split(',')
								return <ConverterListItem
									key={`${item.CharCode}Favorite`}
									FullTitle={ConverterText(lang)[item.CharCode]}
									title={item.CharCode}
									newCourse={item.Value}
									oldCourse={item.Previous} percent={percent}
									click={() => {
										if(!ClickFilter.includes(item.CharCode)) {
											setFavList(`${ClickFilter.join(',')},${item.CharCode}`)
											localStorage.setItem('ConverterList', `${ClickFilter.join(',')},${item.CharCode}`)
										}
									}}
								/>
							}
						)
				}}
			</Await>
		</Suspense>
	)
}

export default BasicListContent
