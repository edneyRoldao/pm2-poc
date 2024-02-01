import axios from 'axios';
import Address from '../src/address'
import AddressService from '../src/address.service'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

test('should get address by cep', () => {
    const addressService = new AddressService()

    const addressMock: Address = {
        "cep": "01001000",
        "logradouro": "Praça da Sé",
        "complemento": "lado ímpar",
        "bairro": "Sé",
        "localidade": "São Paulo",
        "uf": "SP",
        "ddd": "11",
    }

    mockedAxios.get.mockResolvedValue({ data: addressMock })

    addressService.getAddressByCep("01001000").then(data => {
        expect(addressMock).toEqual(data)
        expect(axios.get).toHaveBeenCalled()
    })
})