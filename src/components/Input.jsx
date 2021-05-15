import { useState } from 'react';
import {InputTarefa} from './styled';
export default function Input(props){

    const [input, setInput] = useState('')

    function handleInput(e){
        setInput(e.target.value)
    }

    function handleKeyup(e){
        if(e.keyCode === 13){
            if(props.onEnter){
                props.onEnter(input)
            }
            setInput('')
        }
    }

    return(
        <InputTarefa 
            value={input}
            onChange={handleInput}
            onKeyUp={handleKeyup}
            type="text" 
            placeholder={props.frasePadrao ? props.frasePadrao : 'Frase Padrão'}/>
    )
}