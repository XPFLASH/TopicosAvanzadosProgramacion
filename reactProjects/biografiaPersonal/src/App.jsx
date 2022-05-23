// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'

function App() {

  return (

    <div className='text-gray-800 mx-10 max-w-[100%] max-h-[100%]'>
      <h1 className='md:text-6xl text-center font-Dosis uppercase text-2xl p-10 text-slate-100'>Biografia del Usuario</h1>

      <div className='bg-gray-200 rounded-2xl p-[5%]'>

        <div className='pb-5 mx-10 grid grid-cols-1 gap-1 md:grid-cols-2'>

          <img src="https://scontent.ftij3-1.fna.fbcdn.net/v/t1.6435-9/79898579_771627070021318_6343204488991473664_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=UoPa2JSyq5gAX-k5cRh&_nc_ht=scontent.ftij3-1.fna&oh=00_AT8hf5tpq96khXgqOexXMpS2Lj1Fz-w-p3P_wYezBJmmHA&oe=6292C7DC" alt="Perfil del Usuario" className='rounded-full border-black  border- w-30 lg:w-80' />

          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-800 to-blue-600'><span className='md:text-6xl text-2xl font-bold'>Ricardo Escobar Ceseña</span><br /><br /><p className='font-thin text-2xl text-justify'>Estudiante del Instituto Tecnologico de Ensenada</p><br /><p className='font-thin text-2xl text-justify'>Actualmente estudia en 4to Semestre de Universidad, dentro de la carrera de Ing. Sistemas Computacionales, su objetivo es acabar la carrera para luego poner en práctica los conocimientos y empezar a trabajar para poder formar su presente y futuro</p></h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div className='text-lg'><h1 className='font-bold'>Experiencia</h1><p className='text-justify'>Actualmente no cuenta con tanta experiencia debido a que todavia no ha trabajado, lo poco que tuvo fue dentro de sus practicas profesionales en la preparatoria, así como aprender a ponchar cables</p> </div>

          <div className='text-lg'><h1 className='font-bold'>Habilidades Personales</h1>
            <ul className="list-disc mx-7">
              <li>Experto en Matematicas</li>
              <li>Dominio total del SSF2</li>
              <li>Conocedor del Futbol</li>
            </ul>
          </div>

          <div>-----------------------------------------------------------------------</div>
          <div>------------------------------------------------------------------------</div>

          <div className='text-lg'><h1 className='font-bold'>Educación</h1>
            <ul className="list-disc mx-7">
              <li>CBTis #41 (Centro de Bachillerato Tecnologico industrial y de servicios No.41)</li>
              <li>ITE (Instituto Tecnologico de Ensenada)</li>
            </ul>
          </div>

          <div className='text-lg'><h1 className='font-bold'>Contactos</h1>
            <ul className="list-disc  mx-7">
              <li>escobar10ricardo@gmail.com</li>
              <li>(646) 214-04-79</li>
              <li><a href="https://www.facebook.com/profile.php?id=100015220954522">Facebook</a></li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App