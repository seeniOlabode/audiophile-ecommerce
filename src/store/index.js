import { createStore } from "vuex";
import data from "../data.json"

const store = createStore({
    state() {
        return {
            storeData: data
        }
    }
})

export default store