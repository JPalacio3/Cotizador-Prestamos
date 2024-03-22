import { useState } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";

function App() {

  const [ cantidad, setCantidad ] = useState( 10000 );

  const MIN = 1000;
  const MAX = 20000;
  const STEP = 500;

  function handleChange( e ) {
    setCantidad( Number( e.target.value ) );
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;
    setCantidad( valor );
    if ( valor < MIN ) {
      alert( 'Cantidad NO válida' );
      setCantidad( MIN );
      return;
    }
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;
    setCantidad( valor );
    if ( valor > MAX ) {
      alert( 'Cantidad NO válida' );
      setCantidad( MAX );
      return;
    }
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      {/* Botones de incremento y decremento */}
      <div className="flex justify-between my-6">
        <Button
          operador='-'
          fn={handleClickDecremento}
        />
        <Button
          operador='+'
          fn={handleClickIncremento}

        />

      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {cantidad}
      </p>
    </div>
  )
}

export default App
