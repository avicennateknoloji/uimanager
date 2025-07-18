export interface UIStore {
   stack: UIStackItem[]                  // current UI stack
   registry: ComponentRegistry          // registered components

   openUI: <T = unknown>(
      type: UIType,
      payload?: T,
      onClose?: () => void
   ) => string                          // returns generated id

   closeUI: (id: string) => void        // close specific UI
   closeAll: () => void                 // clear entire stack

   registerComponent: <T = unknown>(
      type: UIType,
      component: ComponentType<{ payload?: T; onClose?: () => void }>
   ) => void                            // register custom component
}