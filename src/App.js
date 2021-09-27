import React,{useState} from 'react'
import ToDoList from './ToDoList'
import './App.css'
function App() {

  const [input, setinput] = useState();
  const [data, setdata] = useState([]);

  let callEvent=(e)=>{
    setinput(e.target.value);
  };
  
  let addList=()=>{
    setdata((pev)=>{
      return(
        [...pev,input]
      )
    });
    setinput('');
  };

  let deletList=(id)=>{
    console.log('dele');
    setdata((pev=>{
      return pev.filter((arEle,index)=>{
        return index !== id;
      })
    }))
  }

  return (
    <>
      <div className="contener">
        <h1>To Do List</h1>
        <div className="nav">
          <input type="text" placeholder="Add Your List" value={input} onChange={callEvent}/>
          <button onClick={addList}>+</button>
        </div>
        <ol>
          {/* <li>{input}</li> */}
          {
            data.map((item,index)=>{
              return(
                <ToDoList data={item} 
                  key={Math.random()}
                  id={index}
                  del={deletList}
                />
              )
            })
          }
        </ol>
      </div>
    </>
  )
}

export default App
