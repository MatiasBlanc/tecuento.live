import socialMedia from './json/social-media.json'
import logoLight from './assets/Logo-light.png'
import logoDark from './assets/Logo-dark.png'

function App() {
  return (
    <>
    <header className=' w-full'>
      <img className='w-40 rounded-full mt-5 mx-auto md:w-48' src={logoLight} alt="" />
      <h1 className='text-dark dark:text-light font-Rubik font-bold text-2xl text-center mt-3 md:text-3xl lg:text-4xl'>Tech Lo Cuento</h1>
      <h2 className='text-p-inactive font-Rubik font-medium text-lg text-center'>@Cuento_Tech</h2>
    </header>
    <main className='w-full flex flex-col items-center mt-10'>
    {
        socialMedia.map(social => (
          <a className='w-4/5 lg:w-1/2 m-2 py-5 bg-principal sm:m-3 md:bg-p-inactive md:hover:bg-principal lg:hover:animate-bounce duration-500 rounded-xl' href={social.link} target="_blank">
                <h2 className='text-light text-center text-xl font-Rubik font-medium tracking-wide'>{social.name}</h2>
          </a>
        ))
    }
    </main>
    </>
  )
}

export default App
