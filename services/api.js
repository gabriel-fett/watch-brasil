export async function getShelves(page) {
    try {
        const response = await fetch(`/api/shelves?page=${page}`)
        if (!response.ok) throw new Error('Erro na resposta da API')
        const data = await response.json()
        return data
            .filter(shelf => shelf.items.length > 0)
            .sort((a, b) => a.position - b.position)
    } catch (error) {
        console.error('Erro ao buscar shelves:', error)
        return []
    }
}