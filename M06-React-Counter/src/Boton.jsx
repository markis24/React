import {useState} from "react";
import './Boton.css'

function Boton() {
    const [numClics, setNumClics] = useState(0)

    return (
        <>
            <div className="btn-contador">
                <div>{numClics}</div>
                <button onClick={() => setNumClics((count) => count + 1)}>
                    Clicar
                </button>
            </div>
            <div className="btn">
                <button onClick={() =>((count) => count - 1)}>
                    Reiniciar
                </button>
            </div>
        </>

    )
}

export default Boton