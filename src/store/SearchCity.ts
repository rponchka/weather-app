import { makeAutoObservable } from "mobx"
import { ISearchCity } from "../types/SearchCity"

class SearchCity {
    cityArray: ISearchCity[] | null = null
    isLoading: boolean = false;
    error: string | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async fetchCity(city: string) {
        this.isLoading = true
        this.error = null
        try {
            const apiKey = 'e2a7f2d679ab4a52ace153751252701'
            const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`)
            if (!response.ok) {
                throw new Error('Error when receiving data')
            }
            const data: ISearchCity[] = await response.json()

            this.cityArray = data.length > 0 ? data : [];

        } catch (e) {
            console.log(e);
        } finally {
            this.isLoading = false
        }
    }
}

export const searchCity = new SearchCity