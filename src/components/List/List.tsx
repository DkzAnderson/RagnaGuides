import { FarmGuide } from "../../types/farm"
import { CraftGuide, craftGuidesData } from "../../types/craftGuide"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FarmsData } from "../../data/farms"
import '../Home/Home.css'
import { ItemList } from "./IItemList"

interface data {
    data: FarmGuide[] | CraftGuide[]
}

const listStyles = {
    main: 'w-full flex flex-col gap-5',
    titleBox: 'title w-24 text-center ',
    ul: 'flex flex-col gap-4 px-5',
    li: 'w-full group cursor-pointer  bg-gradient-to-br from-nd to-nd hover:from-nd hover:to-th rounded-lg p-3 transition-all ease-in-out duration-300',
    text: 'truncate group-hover:tracking-wider duration-300',

}


const FarmList: React.FC<data> = ({ data }) => {

    const [values,setValues] = useState<null | FarmGuide[]>(null)


    useEffect(()=>{
        const db = data;
        const extractDb = db.filter(obj => obj instanceof FarmGuide)
        setValues(extractDb);
    },[data])

    if(values != null && values.length > 0){
        return (
            <div className={listStyles.main}>
                <span className='w-full border-b-4 border-nd px-2'>
                    <div className={listStyles.titleBox}>
                        <h1>
                            Farmeos
                        </h1>
                    </div>
                </span>


                <ul className={listStyles.ul}>
                    {values.map((farms, i) => {
                        return (
                            <li
                                key={i}
                                className={listStyles.li}
                            >
                                <ItemList data={farms}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}

const CraftList: React.FC<data> = ({data})=>{

    return(
        <div className={listStyles.main}>
                <span className='w-full border-b-4 border-nd px-2'>
                    <div className={listStyles.titleBox}>
                        <h1>
                            Crafteos
                        </h1>
                    </div>
                </span>


            <ul className={listStyles.ul}>
                {data.map((craft,i)=>(
                    <li 
                        key={i}
                        className={listStyles.li}
                    >
                        <h3 className={listStyles.text}>
                        {craft.title}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export const List = () => {

    const [data,setData] = useState< FarmGuide[] | CraftGuide[] | null >(null);
    const { id } = useParams();

    useEffect(()=>{
        const list = id === undefined ? 'farm' : id

        const GetData = ()=>{
            if(list === 'farm'){
                setData(FarmsData as FarmGuide[])
            }else if(list === 'craft'){
                setData(craftGuidesData as CraftGuide[])
            }
        }

        GetData();
    },[id])

    if(data != null){

        if (data[0] instanceof FarmGuide) {
            return (
                <div className="">
                    <FarmList data={data} />
                </div>
            )
        }
    
        if(data[0] instanceof CraftGuide){
            return(
                <div className="">
                    <CraftList data={data}/>
                </div>
            )
        }
    }

}
