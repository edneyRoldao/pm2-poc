import express, { Request, Response } from 'express'
import { Router } from 'express-serve-static-core'
import AddressService from './address.service'

const router: Router = express.Router()
const addressService = new AddressService()

router.get('/address/:cep', async (req: Request, res: Response) => {
    console.log('>> address.routes: INIT - /address/', req.params.cep)
    const cep = req.params.cep

    try {
        const address = await addressService.getAddressByCep(cep)
        console.log('>> address.routes: INFO - address found:', address)        
        return res.status(200).json(address)
        
    } catch (error: any) {
        res.status(404).json({ error: error.message})
    }

})

export default router
