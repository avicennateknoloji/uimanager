"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useUIManager } from "@/uimanager"

export function ProductSheet({ payload, onClose }: { payload?: { productId: string }, onClose?: () => void }) {
   const openUI = useUIManager((s) => s.openUI)

   return (
      <Sheet open onOpenChange={(open) => !open && onClose?.()}>
         <SheetContent side="right">
            <SheetHeader>
               <SheetTitle>Ürün Düzenle</SheetTitle>
               <p className="text-sm text-muted-foreground">Ürün ID: {payload?.productId}</p>
            </SheetHeader>
            <div className="p-4 space-y-4">
               <Button onClick={() => openUI("sheet", { productId: "prd-456" })}>Bi tane daha aç</Button>
               {/* Ürün düzenleme formu */}
               <Button onClick={onClose}>Kaydet ve Kapat</Button>
            </div>
         </SheetContent>
      </Sheet>
   )
}