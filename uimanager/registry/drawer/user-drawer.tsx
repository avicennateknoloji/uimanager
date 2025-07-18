"use client"

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"

type Props = {
   payload?: {
      userId: string
   }
   onClose?: () => void
}

export function UserDrawer({ payload, onClose }: Props) {
   return (
      <Drawer open onClose={onClose}>
         <DrawerContent>
            <DrawerHeader>
               <DrawerTitle>Kullanıcı Detayı</DrawerTitle>
               <p className="text-sm text-muted-foreground">Kullanıcı ID: {payload?.userId}</p>
            </DrawerHeader>
         </DrawerContent>
      </Drawer>
   )
}