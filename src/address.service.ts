import axios from 'axios'
import Address from './address'

export default class AddressService {

    async getAddressByCep(cep: string): Promise<Address> {
        console.log('>>>> address-service:INIT cep:', cep)        
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        console.log('>>>> address-service:END response:', response.data)        
        return response.data
    }
    
}