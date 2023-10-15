import {FC} from "react";
import style from './style.module.scss'

interface Props {
    message?: string
}

export const Error: FC<Props> = ({message}) => {
    return <span className={style.error}>{message || 'Ошибка'}</span>
}