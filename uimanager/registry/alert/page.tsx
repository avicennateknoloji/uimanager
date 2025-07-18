// components/ui-alerts/ErrorAlert.tsx
"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export function ErrorAlert({ payload, onClose }: { payload?: { message: string }, onClose?: () => void }) {
   return (
      <div className="fixed bottom-6 right-6 max-w-sm z-50">
         <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Hata</AlertTitle>
            <AlertDescription>
               {payload?.message || "Beklenmeyen bir hata oluştu."}
            </AlertDescription>
            <div className="mt-2 flex justify-end">
               <Button size="sm" variant="outline" onClick={onClose}>Kapat</Button>
            </div>
         </Alert>
      </div>
   )
}
