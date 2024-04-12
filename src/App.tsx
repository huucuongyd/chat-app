import Footer from './components/Footer'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";import Home from './pages/Home';
import ChatFullScreen from './pages/ChatFullScreen';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <>
      <Header/>
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatFullScreen />} />
        </Routes>
      </div>
      <ChatBox/>
      <Footer/>
    </>
  )
}

export default App
