"use client"
import Link from "next/link"

import { useBoolean } from "@/hook/useBoolean"

import { ModeToggle } from "../custom/ModeToggle"


export const Header = () => {
  const [isOpen] = useBoolean()
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className="antialiased  text-xl">Willians Ccallo | </span>
          <span className="antialiased font-bold text-xl">
            Portafolio
          </span>
        </Link>
      </div>
      <div className="hidden lg:block">
        <Link href={"/auth/login"} className="m-2  px-3 py-2 rounded-full transition-all font-semibold text-sm">Habilidadess</Link>
        <Link href={"/auth/login"} className="m-2  px-3 py-2 rounded-full transition-all font-semibold text-sm">Sobre mi</Link>
        <Link href={"/auth/login"} className="m-2  px-3 py-2 rounded-full transition-all font-semibold text-sm">Proyectos</Link>
        <Link href={"/auth/new-account"} className="m-2  px-3 py-2 rounded-full transition-all font-semibold text-sm">Contacto</Link>
      </div>
      <div className=" flex items-center gap-2">

        <button className="m-2 p-2 rounded-md  transition-all hover:bg-gray-100" onClick={isOpen}>
          Iniciar Sesion
        </button>
        <ModeToggle />
      </div>
      {/* <DrawerMenu status={state} onClose={isClose} /> */}
    </nav>
  )
}
