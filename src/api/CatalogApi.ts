import {BaseApi} from "./BaseApi.ts";

export class CatalogApi extends BaseApi {
    constructor() {
        super('https://express-shina.ru');
    }

    public async getCatalogStructure<T = unknown>(): Promise<T> {
        const res = await this.get('/vacancy/catalog')
        const blob = await res.blob()
        const text = await blob.text()
        return JSON.parse(text) as T
    }
}

