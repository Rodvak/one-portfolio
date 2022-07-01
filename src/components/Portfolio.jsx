import React from 'react'
import galaxos from '../assets/portfolio/galaxos.jpg'
import infowars from '../assets/portfolio/infowars.jpg'
import library from '../assets/portfolio/library.jpg'
import musicon from '../assets/portfolio/musicon.jpg'
import paintings from '../assets/portfolio/paintings.jpg'
import projectManager from '../assets/portfolio/projectManager.jpg'
import randomrecipe from '../assets/portfolio/randomrecipe.jpg'


const Portfolio = () => {
  
  const portfolios = [
    {
      id: 1,
      name: 'GALAXOS',
      src: galaxos,
      tech: 'Tech: Java, SpringToolSuite, Unsplash API. ',
      ghLink: 'https://github.com/Rodvak/galaxos'
    },
    {
      id: 2,
      name: 'INFOWARS',
      src: infowars,
      tech: 'Tech: JavaScript, Express.js, React.js, StarWars API. ',
      ghLink: 'https://github.com/Rodvak/starwarsapi'
    },
    {
      id: 3,
      name: 'LIBRARY',
      src: library,
      tech: 'Tech: Java, SpringToolSuite, MySQL. ',
      ghLink: 'https://github.com/Rodvak/Library'
    },
    {
      id: 4,
      name: 'MUSICON',
      src: musicon,
      tech: 'Tech: Python, Flask, Node.js, MySQL. ',
      ghLink: 'https://github.com/Rodvak/my_favorite_band'
    },
    {
      id: 5,
      name: 'PAINTINGS',
      src: paintings,
      tech: 'Tech: Python, Flask, Node.js, MySQL. ',
      ghLink: 'https://github.com/Rodvak/paintings_red_belt'
    },
    {
      id: 6,
      name: 'MYSPEND',
      src: projectManager,
      tech: 'Tech: JavaScript, Express.js, React.js, MongoDB. ',
      ghLink: 'https://github.com/Rodvak/ProductManager'
    },
    {
      id: 7,
      name: 'RANDOMRE',
      src: randomrecipe,
      tech: 'Tech: JavaScript, Express.js, React.js, Recipes API. ',
      ghLink: 'https://github.com/Rodvak/splor'
      
    },

  ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white sm:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='font-signature py-6'>Check some of my work right here.</p>
        </div>
        <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id, src, name, tech, ghLink}) => (
            
            <div key={id} className=' shadow-lg shadow-gray-600 rounded-lg'>
              <p className=' text-center font-signature pb-3'>{name}</p>
            <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
              <p className=' text-center pt-3 font-signature'>{tech}</p>
            <div className=' flex items-center justify-center'>

              {/* create an onClick event inside the button to take people into the links. you can have the link in the array at the top, so you can loop over into it */}
              {/* <button className='font-signature w-1/2 px-6 py-3 m-4 duration-200'>Demo</button> */}
              <a className='font-signature w-1/2 px-6 py-3 m-4 duration-200 text-center text-[#52B4AE]' href={ghLink}>CODE</a>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio