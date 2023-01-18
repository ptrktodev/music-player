module.exports = (temp, el) => {
    let output = temp.replace('{%ICON01%}', el.icon1)
    output = output.replace('{%ICON02%}', el.icon2)
    output = output.replace('{%ICON03%}', el.icon3)

    return output
}