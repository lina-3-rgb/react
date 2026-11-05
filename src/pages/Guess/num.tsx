import { useState } from "react";
const Random = () => {
    const [rand, setRand] = useState(Math.round(Math.random() * 100));
    const [text, setText]= useState('');

    


    return (
        <div>
            {rand}
            <input type="text" onChange={(e) => setText(e.target.value)} />
            
           
            {text}
            
        </div>
    );
};
export default Random;