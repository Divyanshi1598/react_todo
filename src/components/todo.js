import React,{useState} from 'react';
import "./style.css";
const Todo = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);
    // items= {
  //      {'vish'}{dish}
   // }
   let count =0;
    const addItem =()=>{
        if(!inputData){
        }else{
            
        setItems([...items,count, inputData]);
        count=count+1;
        setInputData('')
        }
    }
    const deleteItems =(id) =>{
       // console.log(id);
        const updateditems =items.filter((elem)=>{
            return elem.ind !==elem.ind;
          
            
                     })
        setItems(updateditems);

    } 
    const removeAll = () =>{
        setItems([]);
    }
    return (
       
            <div className="main-div">
                <div className="child-div">
                    <figure className="img">
                        <img src="images/todo.svg" alt="todologo"  />
                        <figcaption>Add Your List Here ✌✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text"  placeholder=" ✍✍ Add Item" 
                        className="form-control"
                             value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                         <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i>
                    </div>
                    <div className="showItems">

                   { items.map((elem,ind) =>{
                        return(
                            <div className="eachItem" key={elem.ind}>
                        <h3>{elem}</h3>
                        <i className="far fa-trash-alt add-btn" 
                        title="Delete Item"onClick={()=> deleteItems(ind)}>
                            </i>
                        </div>

                        )
                    })
                   }
                    
                        
                    </div>
                    <div className="showItems">
                        <button className="btn effect04"
                        data-sm-link-text="Remove All" onClick={() =>removeAll()}>
                         <span>Check List </span></button>
                    </div>
                </div>
            </div>
      
    );
};

export default Todo;
