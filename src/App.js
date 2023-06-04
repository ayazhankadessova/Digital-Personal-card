// import logo from './logo.svg'
// import './App.css'
import About from './components/About'
import Info from './components/Info'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  //   return (
  //     <div className='App'>
  //       <Info />
  //       <About />
  //       <Skills />
  //       <Footer />
  //     </div>
  //   )
  // }

  return (
    <div className='card--container'>
      <div className='card'>
        <Info />
        <div className='card--content'>
          <About />
          <Skills />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
