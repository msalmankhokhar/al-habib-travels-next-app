export function generateSlug(title){
    return title.replace(/ /g, "-")
}

export function generateTitle(slug){
    return slug.replace(/-/g, " ")
}