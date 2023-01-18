module.exports = (temp, words) => {
    let output = temp.replace("{%NAME%}", words.name)
    output = output.replace("{%ARTIST%}", words.artist)
    output = output.replace("{%IMAGE%}", words.img)

    return output
}  