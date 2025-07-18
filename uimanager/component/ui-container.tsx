"use client"

import { useUIManager } from "../index"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

export function UIContainer() {
   const stack = useUIManager((s) => s.stack)

   return (
      <>
         {stack.map(({ id, component: Component, payload, onClose }) => (
            <ErrorBoundary key={id} fallback={<div>Hata oluştu</div>}>
               <Suspense fallback={<div>Yükleniyor...</div>}>
                  <Component payload={payload} onClose={() => useUIManager.getState().closeUI(id)} />
               </Suspense>
            </ErrorBoundary>
         ))}
      </>
   )
}