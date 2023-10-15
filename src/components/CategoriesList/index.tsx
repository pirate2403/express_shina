import {FC} from "react";
import {Category} from "../../logic/interfaces.ts";
import {NavLink, useLocation} from "react-router-dom";
import style from './style.module.scss'

interface Props {
    categories: Category[],
    title?: string
    withOffset?: boolean
}

export const CategoriesList: FC<Props> = ({categories, title, withOffset}) => {
    const {pathname,} = useLocation()
    console.log(pathname)

    return <div className={style.categoriesList}>
        {title && <span className={style.categoriesList__title}>{title}:</span>}
        <ul className={(withOffset ? [style.categoriesList_offset] : []).join(' ')}>
            {
                categories.map((category) => (
                    <li
                        key={category.id}
                        className={style.categoriesList__listItem}
                    >
                        <NavLink to={`${category.slug}?id=${category.id}`} state>
                            {category.name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </div>
}
