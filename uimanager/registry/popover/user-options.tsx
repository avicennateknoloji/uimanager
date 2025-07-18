// components/ui-popovers/UserOptionsPopover.tsx
"use client"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function UserOptionsPopover({ payload, onClose }: { payload?: { userName: string }, onClose?: () => void }) {
   return (
      <Popover open onOpenChange={(open) => !open && onClose?.()}>
         <PopoverTrigger asChild>
            <Button variant="outline">{payload?.userName || "Kullanıcı"}</Button>
         </PopoverTrigger>
         <PopoverContent className="w-44">
            <div className="space-y-2">
               <Button variant="ghost" className="w-full justify-start" onClick={onClose}>Profili Gör</Button>
               <Button variant="ghost" className="w-full justify-start" onClick={onClose}>Çıkış Yap</Button>
            </div>
         </PopoverContent>
      </Popover>
   )
}
