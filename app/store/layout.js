import Sidebar from "../ui/sitebar/Sitebar"
import { ToastContainer } from 'react-toastify';

const detailsLayout = ({children}) => {
  return (
    <div className="md:flex">
       <Sidebar />
        <main>
           {children}
           <ToastContainer />
        </main>
        
    </div>
  )
}

export default detailsLayout