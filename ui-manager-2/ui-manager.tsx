"use client"

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useUIState } from "./hook/uistate.hook";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function UIManager() {
   const { open, state, closeUI } = useUIState();

   if (!state || !open) return null;

   const Component = state.component;

   switch (state.type) {
      case "drawer":
         return (
            <Drawer open={open} onOpenChange={closeUI}>
               <DrawerContent>
                  {Component && <Component {...(state.payload as any)} />}
               </DrawerContent>
            </Drawer>
         );

      case "dialog":
         return (
            <Dialog open={open} onOpenChange={closeUI}>
               <DialogContent>
                  {Component && <Component {...(state.payload as any)} />}
               </DialogContent>
            </Dialog>
         );

      // Sheet ve diğerleri eklenebilir...
      default:
         return null;
   }
}
