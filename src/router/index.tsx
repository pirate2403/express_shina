import {createBrowserRouter} from "react-router-dom";
import {Layout} from "../containers/Layout";
import {Categories} from "../containers/Categories";
import {Category} from "../containers/Category";
import {CategoryLayout} from "../components/CategoryLayout";
import {Error} from "../components/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '',
                element: <Categories/>
            },
            {
                path: ':type/*',
                element: <CategoryLayout/>,
                children: [
                    {
                        path: '*',
                        element: <Category/>
                    }
                ]
            },
            {
                path: '*',
                element: <Error message='Страница не найдена'/>
            }
        ]
    },

])