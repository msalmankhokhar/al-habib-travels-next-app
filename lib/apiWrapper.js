const base_url = process.env.BASE_URL
export async function getPackages(){
    const res = await fetch(`/api/getPackages`)
    const json = await res.json()
    return json.data
}