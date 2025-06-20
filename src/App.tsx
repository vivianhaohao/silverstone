import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Scroll from './functions/layoutFuntion/scrollTotop.tsx'
import Layout from './layout/layout.tsx'
import Home from './pages/home.tsx'
import Agents from './pages/agents.tsx'


export default function App() {
  return (
    <BrowserRouter>
        <Scroll/>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/> }/>
              <Route path="/agents" element={<Agents/>}/>

            </Routes>
          </Layout>
    </BrowserRouter>
  )
}
