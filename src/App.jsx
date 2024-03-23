import { useState } from 'react';
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from './helpers'

function App() {

  const [ cantidad, setCantidad ] = useState( 10000 );
  const [ meses, setMeses ] = useState( 12 );

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
      // alert( 'Cantidad NO válida' );
      setCantidad( MIN );
      return;
    }
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;
    setCantidad( valor );
    if ( valor > MAX ) {
      // alert( 'Cantidad NO válida' );
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
        {formatearDinero( cantidad )}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      <select name="" id="" className='mt-5 w-full bg-white border border-gray-300 rounded-lg text-center font-bold text-xl text-gray-500' value={meses} onChange={e => setMeses( +e.target.value )}>
        <option value="" disabled='disabled'> Seleccione</option>
        <option value="6"> 6 Meses</option>
        <option value="12"> 12 Meses</option>
        <option value="24"> 24 Meses</option>
      </select>




    </div >
  )
}

export default App
