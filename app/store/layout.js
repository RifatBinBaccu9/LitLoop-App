import Sitebar from "./ui/sitebar/Sitebar"


const detailsLayout = ({children}) => {
  return (
    <div className="flex">
        <Sitebar />
        <main>
           {children}
        </main>
        
    </div>
  )
}

export default detailsLayout