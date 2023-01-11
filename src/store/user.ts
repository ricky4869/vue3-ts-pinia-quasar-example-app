import { defineStore } from "pinia"

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions

declare interface user {
  id: number
  username: string
  email: string
}

declare interface loginParams {
  username: string
  password: string
}

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {
      id: 0,
      username: "",
      email: "",
    } as user,
  }),

  getters: {
    isLogin: (state) => {
      return state.user.id > 0
    },
  },

  actions: {
    async login(data: loginParams) {
      console.log("login", data.username, data.password)
    },
  },
})
