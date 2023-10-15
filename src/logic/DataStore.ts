import {CatalogApi} from "../api";
import {makeAutoObservable, runInAction} from "mobx";
import {Categories, Category} from "./interfaces.ts";
import {createContext, useContext} from "react";


export class DataStore {
    private _data: Category[] = []
    private _catalogApi = new CatalogApi()
    private _isLoading: boolean = false
    private _errorMessage: string = ''

    constructor() {
        makeAutoObservable(this,)
    }

    get data(): Category[] {
        return this._data
    }

    get errorMessage(): string {
        return this._errorMessage
    }

    get isLoading(): boolean {
        return this._isLoading
    }

    public getInitialData = async (): Promise<void> => {
        this._isLoading = true
        try {
            const {categories} = await this._catalogApi.getCatalogStructure<Categories>()
            runInAction(() => {
                this._data = categories
                this._errorMessage = ''
            })
        } catch (e) {
            runInAction(() => {
                this._errorMessage = e instanceof Error ? e.message : 'Неизвестная ошибка'
            })

        } finally {
            runInAction(() => {
                this._isLoading = false
            })
        }
    }

    public getCategoryById = (id: string): Category | null => {
        return this.findCategoryById(id, this._data)
    }

    private findCategoryById = (id: string, categories: Category[]): Category | null => {
        let children: Category[] = []
        const found = categories.find(category => {
            children = [...children, ...(category.children || [])]
            return category.id.toString() === id
        })

        if (found) return found
        if (!children.length) return null
        return this.findCategoryById(id, children)
    }
}

export const DataStoreContext = createContext<null | DataStore>(null)

export const useDataStore = (): DataStore | null => {
    return useContext(DataStoreContext)
}