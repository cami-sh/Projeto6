import apiExterna from './apiExterna'

const MoedaService = {
    getListaMoeda: () => apiExterna.get('/currencies.json'),
    getMoeda: (moeda: string) => apiExterna.get(`/currency/${moeda}.json?lang=pt`)
}

export default MoedaService