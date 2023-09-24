
import './App.scss'
import TopBlock from './components/topBlock/topBlock'
import BottomBlock from './components/bottomBlock/bottomBlock'

function App() {
  return (
    <div className='wrapper'>
      <div className="conteiner">
        <TopBlock />
        <BottomBlock />
      </div>
    </div>
  )
}

export default App
