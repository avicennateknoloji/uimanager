import { UIType } from "./ui-type";

export interface UIStackItem<T = unknown> {
   id: string
   type: UIType
   component: ComponentType<{ payload?: T; onClose?: () => void }>
   payload?: T
   onClose?: () => void
}
