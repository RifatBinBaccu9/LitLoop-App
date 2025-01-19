

const bookDetailsPage = ({params}) => {
    console.log(params.id);
    
  return (
    <div>bookDetailsPage: {params.id}</div>
  )
}

export default bookDetailsPage