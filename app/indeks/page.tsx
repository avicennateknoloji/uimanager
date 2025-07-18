"use client"

import { Button } from "@/components/ui/button"
import { useUIManager } from "@/uimanager"
import { UIContainer } from "@/uimanager/component/ui-container"

export default function DashboardPage() {
   const openUI = useUIManager((s) => s.openUI)

   const handleDrawer = () => {
      openUI("drawer", { userId: "abc123" })
   }

   const handleSheet = () => {
      openUI("sheet", { productId: "prd-456" })
   }

   const handleModal = () => {
      openUI("modal", { topic: "Faturalandırma Hakkında" })
   }

   const handleAlert = () => {
      openUI("alert", { message: "Sunucu bağlantısı başarısız." })
   }

   const handleConfirm = () => {
      openUI("confirm", {
         itemName: "Kayıt",
         onConfirm: () => alert("Silme işlemi onaylandı")
      })
   }

   const handlePopover = () => {
      openUI("popover", { userName: "Ayşe Yılmaz" })
   }

   return (
      <div className="p-6 space-y-4">
         <h1 className="text-2xl font-bold">Dashboard</h1>
         <div className="flex flex-wrap gap-2">
            <Button onClick={handleDrawer}>Drawer Aç</Button>
            <Button onClick={handleSheet}>Sheet Aç</Button>
            <Button onClick={handleModal}>Modal Aç</Button>
            <Button onClick={handleAlert}>Alert Aç</Button>
            <Button onClick={handleConfirm}>Confirm Aç</Button>
            <Button onClick={handlePopover}>Popover Aç</Button>
         </div>
         <UIContainer />
      </div>
   )
}
