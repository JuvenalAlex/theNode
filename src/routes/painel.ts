import {Request, Response ,Router} from 'express';

const router = Router();

router.get('/',(req: Request, res:Response)=>{
    res.send('Home do painel');
})
router.get('/noticias',(req: Request, res:Response)=>{
    res.send('Lista de noticias');
})

export default router ;