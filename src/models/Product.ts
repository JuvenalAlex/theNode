type Product = {
    title: string,
    price: number
};


const data: Product[] = [
    {title: 'Produto Z', price: 25},
    {title: 'Produto Y', price: 46},
    {title: 'Produto ajs', price: 75},
    {title: 'Produto tss', price: 92}
];

export const Product = {
    getAll: ():Product[]=>{
        return data;
    },
    getPriceafter: (price:number):Product[] =>{
        return data.filter(item => item.price >= price);
        }
};