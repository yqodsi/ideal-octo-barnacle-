import { defineStore } from 'pinia'
import supabase from '../services/supabase'

export const useGratitudeStore = defineStore('gratitude', {
  state: () => ({
    entries: [],
    isLoading: false,
    error: null
  }),
  actions: {
    async fetchEntries() {
      this.isLoading = true
      try {
        const { data, error } = await supabase
          .from('gratitude_entries')
          .select()
          .order('created_at', { ascending: false })
        if (error) throw error
        this.entries = data
      } catch (error) {
        this.error = error.message
        console.error('Error fetching gratitude entries:', error)
      } finally {
        this.isLoading = false
      }
    },

    async createEntry(entryData) {
      try {
        const { data, error } = await supabase
          .from('gratitude_entries')
          .insert([entryData])
          .select()
          .single()
        if (error) throw error
        this.entries = [data, ...this.entries] // Prepend the new entry
      } catch (error) {
        this.error = error.message
        console.error('Error creating entry:', error)
      }
    },

    async updateEntry(entryId, updatedEntryData) {
      try {
        const { error } = await supabase
          .from('gratitude_entries')
          .update(updatedEntryData)
          .eq('id', entryId)
        if (error) throw error
        const index = this.entries.findIndex((entry) => entry.id === entryId)
        if (index > -1) {
          this.entries[index] = { ...this.entries[index], ...updatedEntryData }
        }
      } catch (error) {
        this.error = error.message
        console.error('Error updating entry:', error)
      }
    },

    async deleteEntry(entryId) {
      try {
        const { error } = await supabase.from('gratitude_entries').delete().eq('id', entryId)
        if (error) throw error
        this.entries = this.entries.filter((entry) => entry.id !== entryId)
      } catch (error) {
        this.error = error.message
        console.error('Error deleting entry:', error)
      }
    }
  }
})
