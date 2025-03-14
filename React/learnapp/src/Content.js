import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
const Content = () =>{
    const [items, setItems] = useState(
        [
        {id:1,
         checked: true,
         item: "pratice Coding"

    },
    {
        id:2,
         checked: false,
         item: "listening music"

    },
    {
        id:3,
         checked: false,
         item: "watching movie"
    },
]);
const handelCheck = (id) => {
  const listitems = items.map((item)=>item.id===id ? {...item,checked:!item.checked} : item)
  setItems(listitems)  
}
const handeldelete = (id) => {
const listitems = items.filter((item)=> 
    item.id !== id)
setItems(listitems)
}
// const numbers = [1,2,3,4,5,6]
// //const itemss = numbers.map(n => ({number:n}))
// const itemss = numbers.filter(n => n>=3).map(n=>({number:n}))
// console.log(itemss)

return (
    <main>
    <ul>
        {items.map((item)=>(
            <li className='item' key={item.id}>
                <input
                      type = "checkbox"
                      onChange={()=>handelCheck(item.id)}
                      checked ={item.checked}
                />
                <label>{item.item}</label>
                <FaTrashAlt 
                    role="button"
                    onClick={()=>handeldelete(item.id)}
                    tabIndex="0"
                    />
            </li>
        ))}
    </ul>
    </main>
)
}
export default Content;