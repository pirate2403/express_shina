import {FC, PropsWithChildren} from "react";
import style from './style.module.scss'

export const EmptyData: FC<PropsWithChildren> = ({children}) => {
    return <div className={style.empty}>
        {children}
    </div>
}