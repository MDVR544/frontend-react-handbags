

function Product({articleName, articleImage, articleImageAlt, articleDescription, articlePrice}) {
    return <article>
        <span>{articleName}</span>
        <img src={articleImage} alt={articleImageAlt}/>
        <p>{articleDescription}</p>
        <h4>{articlePrice}</h4>
    </article>
}

export default Product;