import { Link } from "react-router-dom"
import './Home.css'
import { NavBar } from "../NavBar/NavBar"




export const Home = () => {
  const options = [
    {
      name: 'Guías de farmeo de zeny',
      url: '/list/farm',
      icon: ''
    },
    {
      name: 'Guías de crafteo de items',
      url: '/list/craft',
      icon: ''
    },
    {
      name: 'Indice de builds',
      url: '',
      icon: ''
    },

  ]


  return (
    <section className="w-full relative min-h-screen flex flex-col gap-5 py-4 text-sky-200 overflow-hidden">
      <NavBar/>
      <span className="w-full border-b-4 border-nd px-2 ml-12">
        <div className="title w-40 text-center">
          <h1>
            RagnaGuides
          </h1>
        </div>
      </span>



      <ul className="w-full flex flex-col gap-4 pl-20 pr-4">
        {options.map((option,i)=>(
          <li key={i}>
            <Link
              className="flex w-full bg-slate-900 justify-center rounded-lg p-2"
              to={option.url}
            >
              <h2 className="truncate">
                {option.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
