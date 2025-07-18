// components/ui-confirms/DeleteConfirmModal.tsx
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DeleteConfirmModal({ payload, onClose }: { payload?: { itemName: string, onConfirm: () => void }, onClose?: () => void }) {
   const handleConfirm = () => {
      payload?.onConfirm()
      onClose?.()
   }

   return (
      <Dialog open onOpenChange={(open) => !open && onClose?.()}>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>Silme Onayı</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground">
               {payload?.itemName || "Bu öğe"} silinsin mi?
            </p>
            <DialogFooter>
               <Button variant="outline" onClick={onClose}>İptal</Button>
               <Button variant="destructive" onClick={handleConfirm}>Sil</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}
