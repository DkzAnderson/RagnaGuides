import { Outlet } from "react-router-dom"
function App() {

  return (
    <main className="w-full min-h-screen bg-slate-950 font-nunito">
      <Outlet/>
    </main>
  )
}

export default App
