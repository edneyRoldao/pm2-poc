import express, { Request, Response } from 'express'
import { Router } from 'express-serve-static-core'
import AddressService from './address.service'

const router: Router = express.Router()
const addressService = new AddressService()

router.get('/address/:cep', async (req: Request, res: Response) => {
    const cep = req.params.cep

    try {
        const address = await addressService.getAddressByCep(cep)
        return res.status(200).json(address)
        
    } catch (error) {
        res.status(404).json({ error: 'address does not exist'})
    }

})

export default router
