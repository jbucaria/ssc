import { create } from 'zustand'

const useThemeStore = create(set => ({
  themeMode: 'auto', // 'auto', 'dark', or 'light'
  setThemeMode: mode => set({ themeMode: mode }),
}))

export { useThemeStore }
