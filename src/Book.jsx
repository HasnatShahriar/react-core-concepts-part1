import './Book.css'
export default function Book({book}){
  const {name,price} = book;
  return(
    <div>
      <h3 className='book'>Book Name: {name}</h3>
      <p>Price: {price}</p>
    </div>
  )
}