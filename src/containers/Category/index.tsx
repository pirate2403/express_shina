import {observer} from "mobx-react-lite";
import {useDataStore} from "../../logic/DataStore.ts";
import {useSearchParams} from "react-router-dom";
import {useEffect, useMemo} from "react";
import {EmptyData} from "../../components/EmptyData";
import {CategoriesList} from "../../components/CategoriesList";
import {changeRobotsMetaTagContent} from "../../helpers";
import style from './style.module.scss'

export const Category = observer(() => {
    const store = useDataStore()
    const [searchParams] = useSearchParams();

    const category = useMemo(() => {
        const categoryId = searchParams.get('id')
        if (!categoryId || !store?.getCategoryById) return null
        return store.getCategoryById(categoryId)
    }, [store, searchParams])

    useEffect(() => {
        if (!category) return
        changeRobotsMetaTagContent(category.index ? 'index' : 'noindex')
    }, [category]);

    if (!category) {
        return <EmptyData>Категория не найдена</EmptyData>
    }

    return <div className={style.category}>
        <h1>{category.name}</h1>
        <br/>
        <span>Идентификационный номер: <strong>{category.id}</strong></span>
        {category.children && <CategoriesList categories={category.children} title='Подкатегории' withOffset/>}
    </div>
})