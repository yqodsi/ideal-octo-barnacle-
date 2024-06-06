import { defineStore } from 'pinia'
import supabase from '../services/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),

  actions: {
    async signUp(email, password) {
      this.loading = true
      try {
        const { user, error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        this.user = user // Update the store with the logged-in user
      } catch (error) {
        this.error = error.message
        console.error('Sign-up error:', error.message)
      } finally {
        this.loading = false
      }
    },

    async signIn(email, password) {
      this.loading = true
      try {
        const { user, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        this.user = user // Update the store with the logged-in user
      } catch (error) {
        this.error = error.message
        console.error('Sign-in error:', error.message)
      } finally {
        this.loading = false
      }
    },

    async signOut() {
      try {
        await supabase.auth.signOut()
        this.user = null // Clear the user data upon logout
      } catch (error) {
        console.error('Sign-out error:', error.message)
      }
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['user']
      }
    ]
  }
})
