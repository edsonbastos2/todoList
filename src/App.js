import { useEffect, useState } from 'react';
import {ItemList} from './components/styled';
import InputTarefa from './components/Input';
function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    function loadList(){
      let minhaLista = localStorage.getItem('lista')
      setList(JSON.parse(minhaLista) || [])
    }

    loadList()
  },[])

  function addList(newItem){
    let newList = [...list, {title:newItem, done:false}]
    localStorage.setItem('lista', JSON.stringify(newList))
    setList(newList)
  }

  function handleToggle(index){
    let newList = [...list]
    newList[index].done = !newList[index].done;
    setList(newList)
  }


  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <InputTarefa frasePadrao="Faça uma busca" onEnter={addList}/>

      <hr />
      <ul>
        {
          list.map((item, index) => (
            <ItemList key={index} active={item.done} onClick={() => handleToggle(index)}>
              {item.title}
            </ItemList>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
