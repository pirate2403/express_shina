export abstract class BaseApi {
    protected constructor(private baseUrl: string) {
    }

    protected get(endpoint: string): Promise<Response> {
        return fetch(`${this.baseUrl}${endpoint}`,)
    }
}