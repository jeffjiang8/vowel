function vowels(str) {


    const matches = str.match(/[aeiou]/gi)
    // g => make sure the function doesn't stop after finding the first one, i => insensitive
    // match will return 'null' or an array of matches
    return matches ? matches.length : 0
}