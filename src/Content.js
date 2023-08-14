import React from 'react'

import ItemsList from './ItemsList';


const Content = ({items,handleCheck,handleDelete}) => {
  // const [name, setName]=useState("Earn")
  //   function handleNameChange(){
  //       const names =["hii","bhaa","jobu"];
  //       const int =Math.floor(Math.random()*3);
  //       setName(names[int]) ;
  //     }
// const handleClick=(name)=>{
//   console.log(`thanks for support ${name}`);
// }
// const handleClick1=(e)=>{
//   console.log(e.target.innerText);
// }

// const [count, setCount]=useState(99);
// const [name ,setName] =useState (()=>namee());
// function namee (){
//   return console.log("visit malaiga aparments")
// }

// function incrementFunction() {
//   setCount((count)=>{return count +1})
  
// }

// function decrementFunction() {
//   setCount((count)=>{return count -1})
  
// }


// const numbers=[1,2,3,4,5,6]
// const itemss =numbers.filter(n=> n>=2).map(n=> ({number:n}))

// console.log(itemss)

  return (
    <main>
    {(items.length)?(
      <ItemsList 
       items ={items}
        
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
    
    ):(
      <p style={{marginTop:'2rem'}}>Your list is empty</p>)
      }
    {/* <p >
    Lets {name} Money</p>
    <button onClick={handleNameChange}>Subcribe</button> */}
   
    </main>
  );
}

export default Content;