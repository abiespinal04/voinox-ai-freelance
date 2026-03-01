import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/layouts/Layout'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Process } from '@/pages/Process'
import { Pricing } from '@/pages/Pricing'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="process" element={<Process />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
