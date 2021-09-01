import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import articulos from "../articulos.json"
import {useParams} from 'react-router-dom'
import {getFirestore} from '../services/fireBaeService'


const GetITem=(key)=>{
    const [item,setItem] = useState([]);
        useEffect(()=>{
            const db=getFirestore()
            const Itemcollection = db.collection("producto")
            Itemcollection.get().then((query)=>{query.docs.map(data=>{if(data.id==key){setItem(data.data())}} )})
           
        },[])    
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
