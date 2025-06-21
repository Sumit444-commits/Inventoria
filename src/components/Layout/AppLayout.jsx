import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
   <div className="flex flex-col min-h-screen  text-white">
      <Header />
      <main className="flex-grow overflow-y-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
