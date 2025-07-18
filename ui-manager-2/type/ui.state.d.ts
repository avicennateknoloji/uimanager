export interface UIState {
   type: UIElementType | null;
   payload?: unknown; // örnek: { itemId: string }
   component?: React.FC<unknown>; // opsiyonel: açılacak özel bileşen
}