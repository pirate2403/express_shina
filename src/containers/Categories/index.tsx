import {observer} from "mobx-react-lite";
import {useDataStore} from "../../logic/DataStore.ts";
import {EmptyData} from "../../components/EmptyData";
import {CategoriesList} from "../../components/CategoriesList";
import style from './style.module.scss'

export const Categories = observer(() => {
    const store = useDataStore()

    if (!store?.data) {
        return <EmptyData>Список категорий пуст</EmptyData>
    }

    return <div className={style.categoriesList}>
        <CategoriesList categories={store.data}/>
    </div>
})