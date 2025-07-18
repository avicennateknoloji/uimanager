import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { UIStore } from './type/ui-store'
import { UIStackItem } from './type/ui-stack-item'

export const useUIManager = create<UIStore>((set, get) => ({
   stack: [],
   registry: {},

   openUI: (type, payload, onClose) => {
      const id = nanoid()
      const component = get().registry[type]
      if (!component) {
         console.warn(`No component registered for UI type "${type}"`)
         return id
      }
      const item: UIStackItem = { id, type, component, payload, onClose }
      set({ stack: [...get().stack, item] })
      return id
   },

   closeUI: (id) => {
      const current = get().stack
      const removing = current.find(item => item.id === id)
      if (removing?.onClose) removing.onClose()
      set({ stack: current.filter(item => item.id !== id) })
   },

   closeAll: () => {
      get().stack.forEach(item => item.onClose?.())
      set({ stack: [] })
   },

   registerComponent: (type, component) => {
      set({ registry: { ...get().registry, [type]: component } })
   }
}))