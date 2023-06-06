/* eslint-disable react/prop-types */
export const ProductCardView = ({ id, name, description, price, handleAddProductCart }) => {
    const onAddProduct = (product) => {
        console.log(product)
        handleAddProductCart(product);
    } 
    
    return (
    <>
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
            <button className="btn btn-primary" onClick={() => onAddProduct({id, name, description, price})}>Agregar</button>
        </div>
    </div>
    </>
  )
}
