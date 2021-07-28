import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import articulos from "../articulos.json"
import {useParams} from 'react-router-dom'

const GetITem=(key)=>{
    const [item,setItem] = useState([1,2]);
        useEffect(()=>{
            const task  = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(articulos)
                },2000)
            })
            
            task.then((item)=>{item.articulos.map((it)=>{if(it.id==key) {setItem(it)} })})
        })    
             return item
        }
function GetKey(){
    let {id} = useParams()
    return id
}
             

function ItemDetailContainer(props){
    
    return(
    <ItemDetail item={GetITem(GetKey())} />
)

}

export default ItemDetailContainer
