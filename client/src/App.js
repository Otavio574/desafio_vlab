import React from 'react'
import Header from './components/Header/Header'
import ItemList from './components/ItemList/ItemList'
import './styles/App.css'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ItemList />
      </main>
    </div>
  )
}

export default App
