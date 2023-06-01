import styles from './ConverterBasicList.module.sass'
import { FC, useState } from 'react'
import TransparentInput from '../../UI/TransparentInput/TransparentInput.tsx'
import { ConverterBasicListText } from '../../Localisation.ts'
import { ValuteType } from '../../interfaces.ts'
import BasicListContent from '../../WIDGETS/BasicListContent/BasicListContent.tsx'
import ConverterList from '../../ENTITIES/ConverterList/ConverterList.tsx'

const ConverterBasicList: FC<{lang: string, Valute: ValuteType, setFavList: (arg: string) => void, FavList: string}> = ({lang, Valute, FavList, setFavList}) => {

	const [SearchInput, setSearchInput] = useState('')

	return (
		<div className={styles.BasicList}>
			<div className={styles.Search}>
				<nav>
					<TransparentInput dopClass={styles.DPsearch} placeholder={ConverterBasicListText(lang).Search} type="search" FZ={2} setValue={(e) => setSearchInput(e.target.value)} Value={SearchInput}/>
				</nav>
			</div>
			<ConverterList>
				<BasicListContent Valute={Valute} lang={lang} setFavList={setFavList} FavList={FavList} search={SearchInput}/>
			</ConverterList>
			<span className={styles.info}>
				<a href="https://www.cbr-xml-daily.ru/">API для курсов ЦБ РФ</a>
			</span>
		</div>
	)
}

export default ConverterBasicList
