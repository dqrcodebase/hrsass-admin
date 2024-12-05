import { defineStore } from 'pinia'

interface CommonState {
  language: string;
}

export const useCommonStore = defineStore({
  id: 'common',
  state: (): CommonState => ({
    language: 'zh-cn',
  }),
  actions: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    closeSidebar() {
      this.sidebar = false;
    },
    setDevice(device: string) {
      this.device = device;
    }
  }
})