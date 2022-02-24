import { reactive, readonly, computed } from "vue";
import useUserState from "@/store/useUserState";

const defaultState = {
    items: [
        {
            id: 1,
            title: "Chalice",
            requiresLogin: false,
        },
        {
            id: 2,
            title: "Sword",
            requiresLogin: false,
        },
        {
            id: 3,
            title: "Scales",
            requiresLogin: false,
        },
    ],
};

const state = reactive(defaultState)

const getters = {
    getNumberOfItems: () => {
        return computed(() => state.items.length)
    },
    getItems: () => {
        return computed(() => {
            const { getIsLoggedIn } = useUserState()

            if (getIsLoggedIn().value) {
                return state.items
            }

            return state.items.filter((item) => item.requiresLogin === false)
        })
    }
}

const actions = {
    addItem: (newItem) => {
        state.items.push(newItem)
    },
    removeMovie: (itemId) => {
        const indexOfItem = state.items.findIndex((item) => item.id === itemId)

        state.items.splice(indexOfItem, 1)
    }
}

export default () => ({
    state: readonly(state),
    ...getters,
    ...actions
})