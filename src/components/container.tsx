import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <section className="mt-5 mx-10">
      <div className="p-5 bg-white rounded-lg flex flex-col gap-10">
        {children}
      </div>
    </section>
  )
}