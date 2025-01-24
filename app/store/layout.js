import StoreProvider from "../provider";
import Sidebar from "../ui/sitebar/Sitebar"
import { ToastContainer } from 'react-toastify';

const detailsLayout = ({children}) => {
  return (
   <StoreProvider>
     <div className="md:flex">
       <Sidebar />
        <main>
           {children}
           <ToastContainer />
        </main>
        
    </div>
   </StoreProvider>
  )
}

export default detailsLayout