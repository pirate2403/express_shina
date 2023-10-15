import {FC} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import style from './style.module.scss'

export const CategoryLayout: FC = () => {
    const navigate = useNavigate();

    return <div className={style.categoryLayout}>
        <button onClick={() => navigate(-1)}>
            Назад
        </button>
        <Outlet/>
    </div>
}