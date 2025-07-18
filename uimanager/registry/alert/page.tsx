// components/ui-alerts/ErrorAlert.tsx
"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle2Icon, Terminal } from "lucide-react"

export function ErrorAlert({ payload, onClose }: { payload?: { message: string }, onClose?: () => void }) {
   return (
      <div className="fixed inset-0 flex items-center justify-center w-full h-full pointer-events-none z-50">
        <div className="max-w-sm mt-auto ms-auto me-4 mb-4">
            <Alert>
               <CheckCircle2Icon />
               <AlertTitle>Eller yukarı!</AlertTitle>
               <AlertDescription>
                  {payload?.message || "Beklenmeyen bir hata oluştu."}
               </AlertDescription>
            </Alert>
        </div>
      </div>
   )
}
