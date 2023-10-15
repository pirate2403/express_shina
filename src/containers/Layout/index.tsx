import {FC} from 'react'
import {useDataStore} from "../../logic/DataStore.ts";
import {observer} from "mobx-react-lite";
import {Loader} from "../../components/Loader";
import {Outlet} from "react-router-dom";
import {Error} from "../../components/Error";
import style from './style.module.scss'


export const Layout: FC = observer(() => {
    const store = useDataStore()

    if (store?.errorMessage) {
        return <Error message='Возникла ошибка. Попробуйте обновить страницу'/>
    }

    return (
        <div className={style.layout}>
            {store?.isLoading ? <Loader/> : <Outlet/>}
        </div>
    )
})
