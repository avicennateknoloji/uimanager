// components/ui-modals/HelpModal.tsx
"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function HelpModal({ payload, onClose }: { payload?: { topic: string }, onClose?: () => void }) {
   return (
      <Dialog open onOpenChange={(open) => !open && onClose?.()}>
         <DialogContent className="p-3">
            <DialogHeader>
               <DialogTitle>Yardım</DialogTitle>
               <DialogDescription>{payload?.topic || "Genel yardım bilgileri."}</DialogDescription>
            </DialogHeader>
            <div className="">
               {/* Yardım içeriği */}
               <p className="text-sm">Yardım metni buraya gelir...</p>
               <Button className="mt-4 py-1  h-auto" size="sm" onClick={onClose}>OK</Button>
            </div>
         </DialogContent>
      </Dialog>
   )
}
