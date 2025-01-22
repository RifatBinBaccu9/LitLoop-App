import Sidebar from "../ui/sitebar/Sitebar"


const detailsLayout = ({children}) => {
  return (
    <div className="md:flex">
       <Sidebar />
        <main>
           {children}
        </main>
        
    </div>
  )
}

export default detailsLayout