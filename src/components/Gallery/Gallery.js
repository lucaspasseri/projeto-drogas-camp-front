export default function Gallery({products}){

    console.log(products);

    const productsList = products.map(product => {
        return <div>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <div>{product.inStock}</div>
            <img height="120px" src={product.image}/>
        </div>
        ;
    });


    return(
        <>
            {productsList}
        </>
    );
}