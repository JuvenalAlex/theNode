import {Request, Response} from 'express';

import { Product } from '../models/Product';

export const home = (req: Request, res:Response)=>{
    let age: number = 18
    let showOld: boolean = false 
    if(age > 50){
        showOld = true
    };


    let list = Product.getAll();
    let expensiveList = Product.getPriceafter(50);

    res.render('pages/home',{
        name:'Juvenal',
        lastname:'Alex',
        showOld,
        products:list,
        expensives:expensiveList,
        lista: []
    });
};