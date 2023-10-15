import {FC} from "react";
import style from './style.module.scss'

export const Loader: FC = () => {
    return <div className={style.loader}>
        Идет загрузка...
    </div>
}
