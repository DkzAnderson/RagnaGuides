import React from "react"
import { enemy } from "../../types/enemy"
import { item } from "../../types/item"


interface Props {
    data: enemy[] | item[]
}

export const List: React.FC<Props> = ({data}) => {

    const styles = {
        main : 'w-full flex flex-col',
        title: 'border-b-2',
        list: {
            main: 'flex flex-col gap-2 w-full py-2 max-h-52 overflow-auto',
            item: 'w-full h-16 bg-nd rounded grid grid-cols-[15%_58%_22%] items-center',
            imageBox: 'size-full p-2 flex items-center justify-center',
            image: 'size-10 object-contain',
            txtBox: 'size-full flex gap-1 items-center',
            titles: 'text-sm',
            txt: 'text-sm text-gray-300'
        },

    }
  
    return (
    <div className={styles.main}>
        <h4 className={styles.title}>
            {data[0] instanceof enemy ? 'Enemigos:' : 'Objetos:'}
        </h4>

        <ul className={styles.list.main}>
            {data.map((value,i)=>(
                <li 
                    key={i}
                    className={styles.list.item}
                >
                    <picture className={styles.list.imageBox}>
                        <img
                            className={styles.list.image} 
                            src={value.image} 
                            alt={`${value.name}-image`} 
                        />
                    </picture>

                    <div className={styles.list.txtBox}>
                        <h4 className={styles.list.titles}>
                            Nombre: 
                        </h4>
                        <h5 className={styles.list.txt}>
                            {value.name}
                        </h5>
                    </div>

                    <div className={styles.list.txtBox}>
                        <h4 className={styles.list.titles}>
                            Id: 
                        </h4>
                        <h5 className={styles.list.txt}>
                            #{value.id}
                        </h5>
                    </div>

                </li>
            ))}
        </ul>
    </div>
  )
}
