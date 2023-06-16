import {Router} from 'express';

const router = Router();

router.get('/info', (req,res, next)=>{
    res.json({
        status:true,
        message: 'Api funcionando',
        version: '1.0.0'
    });
});

router.get('/pruebas', (req,res, next)=>{
            res.json({
                status:true,
                message: 'Api funcionando',
                version: '1.0.0',
                body: ['5'],
                params: [{
                    id:1,
                    name: 'Edgar',
                    edad: 20
            },
        {
            id: 2,
            name: 'Carlos',
            edad: 30
        }]
            });
        });


export default router;
