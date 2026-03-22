export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'

    const response = await fetch(
        `https://simple-test-api-s02c.onrender.com/shelves?page=${page}`
    )
    const data = await response.json()

    return Response.json(data)
}