"use client"

import { useEffect } from "react"
import { useUIManager } from "@/uimanager"
import { UserDrawer } from "@/uimanager/registry/drawer/user-drawer"
import { ProductSheet } from "@/uimanager/registry/sheet/product-sheet"
import { HelpModal } from "@/uimanager/registry/dialog/help-dialog"
import { ErrorAlert } from "@/uimanager/registry/alert/page"
import { DeleteConfirmModal } from "@/uimanager/registry/dialog/delete-confirm"
import { UserOptionsPopover } from "@/uimanager/registry/popover/user-options"

export default function RootLayout({ children }: { children: React.ReactNode }) {
   const register = useUIManager((s) => s.registerComponent)

   useEffect(() => {
      register("drawer", UserDrawer)
      register("sheet", ProductSheet)
      register("modal", HelpModal)
      register("alert", ErrorAlert)
      register("confirm", DeleteConfirmModal)
      register("popover", UserOptionsPopover)
   }, [register])

   return (
      <>
         {children}
      </>
   )
}