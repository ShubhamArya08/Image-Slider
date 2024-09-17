import Index from './component/Index'
import './App.css'

import slides from './component/data';

function App() {
  return (
    <div className='app'>
      <Index data={slides} />
    </div>
  )
}

export default App
