import React,{useState,useEffect} from 'react'
import "./style.css"

//get localstoage data
const getLocalData=()=>{
    const item=localStorage.getItem("mytodoList")
    if(item){
        return JSON.parse(item);
    }
    else{
      return[];
    }
    
};

const ToDo = () =>{ 
const [inputData,setInputData]=useState("")
const [items,setItems]=useState(getLocalData());
const [isEditItem,setisEditItem]=useState("")
const [toggleButton,setToggleButton]=useState(false)
//ad item
   const addItem=()=>{
    if(!inputData){
        alert("Please fill data")
    }else if(inputData && toggleButton){
        setItems(
           items.map((currElm)=>{
               if(currElm.id===isEditItem){
                 return{...currElm,name:inputData}  
           }
           return currElm;
           
           })
        )
        setInputData([])
     setisEditItem(null);
     setToggleButton(false)
   }

    else{
        const myNewInputData={
            id: new Date().getTime().toString(),
            name:inputData,

        }
        setItems([...items,myNewInputData])
        setInputData("");
        
       
    }

   }
   //Edit item
   const editItem=(index)=>{
     const item_todo_edited=items.find((curElem)=>{
        return curElem.id===index;

     });
     setInputData(item_todo_edited.name)
     setisEditItem(index);
     setToggleButton(true)



   }
   //Delete item
   const deleteItem=(index)=>{
    const updatedItems=items.filter((curElem)=>{
       
        
        return curElem.id!==index;

    })
    
    setItems(updatedItems)
   }
   //Remove all
   const removeAll=()=>{
    setItems([])

}
    //adding local storage
    useEffect(()=>{
        localStorage.setItem("mytodoList",JSON.stringify(items))
    },[items])

  return (
    <>
    <div className="main-div">
        <div className='child-div'>
            <figure>
                <img src="./images/todo.png" alt="todologo" />
                <figcaption>Add Your List Here ✌</figcaption>
            </figure> 
            <div className="addItems">
                <input type="text" placeholder="👉 Add Item" className="form-control" value={inputData} onChange={(event)=>setInputData(event.target.value)}/>
                {toggleButton?(
                    <i className="fa fa-edit add-btn" onClick={addItem}></i>
                    ):(
                        <i className="fa fa-plus add-btn" onClick={addItem}></i>
                    )
                }

            </div>
            {/* show our item */}
            <div className='showItems'>
            {
                    items.map((currElm)=>{
                        return(
                            <div className="eachItem" key= {currElm.id}>
                            <h3>{currElm.name}</h3>
                            <div className="todo-btn">
                            <i className="far fa-edit add-btn" onClick={()=>{
                                editItem(currElm.id)
                            }}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currElm.id)}></i>     
                            </div>
                        </div>
                            
                        )
                        })
                    }
              </div>
            <div className="showItems">
                
                <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
            </div>
        </div>

    </div>
    </>
  )
}

export default ToDo;