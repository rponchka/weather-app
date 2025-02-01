import { makeAutoObservable } from "mobx"

class CityStore{
    city:string = 'Сокаль'

    constructor() {
        makeAutoObservable(this)
    }

    setCity(newCity:string) {
        this.city = newCity
    }
}

export const cityStore = new CityStore()