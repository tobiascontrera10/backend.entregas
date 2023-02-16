class ProductManager {
    constructor( title, description,price,thumbnail,code,stock){
        this.title= title,
        this.description= description,
        this.price = price,
        this.thumbnail= thumbnail,
        this.code= code,
        this.stock= stock
    }
    getProducts(){  
        console.log(length)
    }
}

const objet1 = new ProductManager ("Iphone 11","64gb", 300, "img.jpeg", 03324, 10)
const objet2 = new ProductManager ("Iphone 13","64gb", 840, "img.jpeg", 03345, 13)
const objet3 = new ProductManager ("Iphone 14","124gb", 1035, "img.jpeg", 03354, 4)


const arrayUno = []

arrayUno.push(objet1, objet2, objet3)
console.log(arrayUno)


