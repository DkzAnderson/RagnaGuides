import { useParams } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar";
import '../Home/Home.css'

import { FarmsData } from "../../data/farms";
import { useEffect, useState } from "react";
import { Farm } from "../../types/farm";
import { enemy } from "../../types/enemy";
import { item } from "../../types/item";
import { List } from "./List";

export const Details = () => {

  const [data, setData] = useState<null | Farm>(null);
  const [loading,setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    const GetData = () => {
      if (id !== undefined) {
        FarmsData.forEach(element => {
          element.values.forEach(e => {
              if(e.title === id){
                const updatedFarm = e.GetFarmData()
                setData(updatedFarm);
                setLoading(false)
              }
          });
        });
      }
    }

    GetData();
  }, [id])

  if (loading) {
    return (
      <div className="w-full min-h-screen relative">
        <NavBar />
        <div className="flex flex-col w-full">

          <span className="w-full pl-16 border-b-4 border-nd h-[7vh] border ">
            <div className="title w-full text-center py-2">
              <h1 className="truncate">
                {id}
              </h1>
            </div>
          </span>


          <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-2 overflow-auto max-h-[85vh]">
                <h2>
                  Cargando
                </h2>
          </div>

        </div>
      </div>
    )
  }


  if (data != null) {
    // Filtrar enemigos
    const enemies: enemy[] = data.enemiesToKill.filter(
      (npc): npc is enemy =>
        typeof npc !== "number" &&
        "id" in npc &&
        "name" in npc &&
        "image" in npc
    );

    // Filtrar objetos obtenibles
    const items: item[] = data.obtainableItems.filter(
      (obj): obj is item =>
        typeof obj !== "number" &&
        "id" in obj &&
        "name" in obj &&
        "image" in obj
    );


    return (
      <div className='w-full min-h-screen relative font-roboto'>
        <NavBar />
        <div className="flex flex-col w-full">
          {/* Header */}
          <span className="w-full pl-16 border-b-4 border-nd h-[7vh]">
            <div className="title w-full text-center py-2">
              <h1 className="truncate">
                {id}
              </h1>
            </div>
          </span>

          {/* Contenido */}
          <div className="w-full flex flex-col gap-5 max-h-[90vh] pl-20 pr-4 py-2 overflow-auto border">
            <div className="grid grid-cols-2 w-full gap-y-2">
              {/* Zona */}
              <span className="col-span-2 w-full flex items-center gap-2">
                <h4 className="text-sm text-center">
                  Zona:
                </h4>
                <p className="">
                  {data.zone}
                </p>
              </span>
              {/* Nivel recomendado */}
              <span className="w-full flex items-center gap-2">
                <h4 className="text-sm ">
                  Nivel:
                </h4>
                <p className="">
                  {data.level}
                </p>
              </span>
              {/* Autoloot*/}
              <span className="flex gap-2 w-full">
                <h4 className="text-sm">
                  Autoloot:
                </h4>
                <h5 className="text-sm text-white">
                  {data.autoloot}
                </h5>
              </span>

              {/* clases */}
              <div className="w-full flex gap-2 col-span-2">
                <h4 className="text-sm">
                  Clases:
                </h4>

                <ul className="w-full grid grid-cols-2 h-12 bg-nd rounded gap-x-2 gap-y-3 items-center p-2 overflow-auto">
                  {data.clase.map((e, i) => (
                    <li key={i}
                      className="bg-th rounded px-1"
                    >
                      <h5 className="text-sm text-rd">
                        {e}
                      </h5>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Alootid */}
              {data.alootid.length > 1 &&
                <div className="w-full col-span-2 flex">

                  <h4 className="text-sm">
                    Alootid:
                  </h4>

                  <ul className="w-full h-12 grid grid-cols-4 gap-y-2 gap-x-1 text-white p-2 bg-nd rounded overflow-auto">
                    {data.alootid.map((loot, i) => (
                      <li
                        key={i}
                        className="w-full h-5 flex rounded bg-th px-1"
                      >
                        <h5 className="text-rd text-sm font-bold"># {loot}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              {/* Descripción */}
              {data.description.length > 0 &&
                <div className="col-span-2">
                  <h4 className="text-sm">
                    Información:
                  </h4>
                  <ul className="w-full h-12 flex bg-nd rounded flex-col text-white pl-6 pr-2 list-disc overflow-auto">
                    {data.description.map((txt, i) => (
                      <li key={i}>
                        <h5 className="text-sm text-white font-light">{txt}</h5>
                      </li>
                    ))}
                  </ul>
                </div>
              }

              {/* Enemigos a matar */}
              <div className="w-full col-span-2">
                <List data={enemies} />
              </div>
              {/* Objetos obtenibles*/}
              <div className="w-full col-span-2">
                <List data={items} />
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
