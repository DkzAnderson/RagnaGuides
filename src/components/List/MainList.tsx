import { NavBar } from "../NavBar/NavBar"
import { List } from "./List"

export const MainList = () => {

  return (
    <section className="w-full relative min-h-screen flex flex-col gap-5 py-4 pl-14 text-white">
        <NavBar/>
        <List/>
    </section>
  )
}
