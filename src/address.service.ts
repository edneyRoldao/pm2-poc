import axios from 'axios'
import Address from './address'

export default class AddressService {

    async getAddressByCep(cep: string): Promise<Address> {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return response.data
    }
    
}