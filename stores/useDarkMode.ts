import { defineStore } from 'pinia';

interface DarkModeState {
  isDarkMode: boolean;
};

export const useDarkMode = defineStore('darkMode', {
  state: (): DarkModeState => ({
    isDarkMode: false,
  }),
  getters: {
    /**
     * Getter state dark mode
     * 
     * @returns {boolean} state from dark mode
     */
    getIsDarkMode(): boolean {
      return this.isDarkMode;
    },
  },
  actions: {
    /**
     * Toggle darkmode on html theme
     * 
     * @return void
     */
    toggleDarkMode(): void {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('darkMode', this.isDarkMode.toString());
      this.updateHtmlThemeAttribute();
    },

    /**
     * Initialize darkmode on html theme
     * 
     * @return void
     */
    initializeDarkMode(): void {
      const storedDarkMode: string | null = localStorage.getItem('darkMode');
      const systemDarkMode: boolean | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      this.isDarkMode = storedDarkMode === null ? systemDarkMode : (storedDarkMode === 'true');
      this.updateHtmlThemeAttribute();
    },

    /**
     * Updating darkmode on html theme
     * 
     * @return void
     */
    updateHtmlThemeAttribute(): void {
      const html = document.documentElement;
      html.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
    },
  }
});