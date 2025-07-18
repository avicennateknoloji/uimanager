"use client"

import { Button } from "@/components/ui/button"

import { UIManager } from "@/ui-manager-2/ui-manager"
import { useUIState } from "@/ui-manager-2/hook/uistate.hook"

export default function DashboardPage() {
   const { openUI } = useUIState()
   return (
      <div className="p-6 space-y-4">
         <h1 className="text-2xl font-bold">Dashboard</h1>
         <div className="flex flex-wrap gap-2">
            <Button onClick={() => openUI({ type: "drawer", component: OrderDetailDrawer, payload: { orderId: "hwo ist hgoasşfaslep" } })}>Drawer Aç</Button>
         </div>

         <UIManager />
      </div>
   )
}


function OrderDetailDrawer({ payload }: { payload: { orderId: string } }) {
   console.log(payload)
   return <div>Order Detail Drawer {payload.orderId} <Button onClick={() => useUIState.getState().closeUI()}>Kapat</Button>   </div>
}
