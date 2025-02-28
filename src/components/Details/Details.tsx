import { useParams } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar";
import '../Home/Home.css'

import { FarmsData } from "../../data/farms";
import { useEffect, useState } from "react";
import { Farm } from "../../types/farm";
import { enemy } from "../../types/enemy";
import { item } from "../../types/item";

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
    return (
      <div className='w-full min-h-screen relative'>
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
            {/* Clases */}
            <span className="flex flex-col">
              <h4 className="">
                Clases:
              </h4>
              <ul className="w-full flex flex-wrap gap-2 items-center pl-6 pr-2 ">
                {data.clase.map((e, i) => (
                  <li key={i}>
                    <h5 className="text-white">
                      {e}
                    </h5>
                  </li>
                ))}
              </ul>
            </span>

            {/* Descripción */}
            <div className="text-white ">
              <h4>
                Información:
              </h4>
              <ul className="flex flex-col text-white pl-6 pr-2 list-disc">
                {data.description.map((txt, i) => (
                  <li key={i}>
                    <p>{txt}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nivel recomendado / zona */}
            <div className="flex justify-between">
              <span>
                <h4>
                  Nivel:
                </h4>
                <p className="pl-6 pr-2 ">
                  {data.level}
                </p>
              </span>
              <span>
                <h4>
                  Zona:
                </h4>
                <p className="pl-6 pr-2 ">
                  {data.zone}
                </p>
              </span>

            </div>
            {/* Autoloot - Alootid */}
            <div>
              {data.alootid.length > 1 &&
                <span>

                  <h4>
                    Alootid:
                  </h4>

                  <ul className="flex flex-wrap gap-8 pl-8 text-white list-disc">
                    {data.alootid.map((loot, i) => (
                      <li
                        key={i}
                      >
                        <p># {loot}</p>
                      </li>
                    ))}
                  </ul>
                </span>
              }

              <span>
                <h4>
                  Autoloot: {data.autoloot}
                </h4>
              </span>
            </div>

            {/* Enemigos a matar */}
            <div>
              <h4>
                Enemigos:
              </h4>
              <ul className="flex flex-col gap-2 overflow-auto max-h-40">
                {data.enemiesToKill
                  .filter((npc): npc is enemy => typeof npc !== "number") // Filtramos solo los enemigos
                  .map((npc, i) => (
                    <li
                      className="flex items-center gap-2 border-b border-white"
                      key={i}
                    >
                      <picture className="size-12 p-1">
                        <img
                          className="size-full object-contain"
                          src={npc.image}
                          alt={`${npc.name}-poster`}
                        />
                      </picture>

                      <span className="flex gap-1 items-center h-full">
                        <h4>nombre:</h4>

                        <h5 className="text-white pt-1">
                          {npc.name}
                        </h5>
                      </span>

                      <span className="flex gap-1 items-center">
                        <h4>Id:</h4>
                        <p className="pt-1">#{npc.id}</p>
                      </span>
                    </li>
                  ))}
              </ul>

            </div>
            {/* Objetos obtenibles*/}
            <div>
              <h4>
                Objetos:
              </h4>
              <ul className="flex flex-col gap-2 overflow-auto max-h-40">
                {data.obtainableItems
                  .filter((obj): obj is item => typeof obj !== "number") // Filtramos solo los enemigos
                  .map((obj, i) => (
                    <li
                      className="flex items-center gap-2 border-b border-white"
                      key={i}
                    >
                      <picture className="size-12 p-1">
                        <img
                          className="size-full object-contain"
                          src={obj.image}
                          alt={`${obj.name}-poster`}
                        />
                      </picture>

                      <span className="flex gap-1 items-center h-full">
                        <h4>nombre:</h4>

                        <h5 className="text-white pt-1">
                          {obj.name}
                        </h5>
                      </span>

                      <span className="flex gap-1 items-center">
                        <h4>Id:</h4>
                        <p className="pt-1">#{obj.id}</p>
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    )
  }
}
