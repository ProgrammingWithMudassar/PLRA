import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout/Layout.jsx';



const App = () => {

  return (
    <div className='App'>

      <Router>
        <Layout />
      </Router>
    </div>
  )
}

export default App
