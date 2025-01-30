import { makeAutoObservable } from "mobx";
import { IInitialUserCoordinates } from "../types/InitialUserCoordinates";

class InitialUserCoodrdinatesStore {
    initialCoordinates: IInitialUserCoordinates | null = null
    isLoading: boolean = false;
    error: string | null = null

    constructor() {
        makeAutoObservable(this)
    }

    async getInitialCoordinates() {
        this.isLoading = true;
        this.error = null;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((positios) => {
                const { latitude, longitude } = positios.coords;
                this.initialCoordinates = { latitude, longitude }
                this.isLoading = false
            },(error) => {
                console.log(error, 'Не вдалось отримати координати');  
                this.isLoading = false
            })
        }else{
            this.error = 'Нажаль ми не змогли знайти вашої геолокації'
            this.isLoading = false
        }
    }
}

export const initialUserCoodrdinatesStore = new InitialUserCoodrdinatesStore()