import { createStore } from "vuex";
import data from "../data.json"

const store = createStore({
    state() {
        return {
            data: data
        }
    }
})

export default store