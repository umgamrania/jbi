const input = [
    document.querySelector("#r1"),
    document.querySelector("#r2"),
    document.querySelector("#r3"),
    document.querySelector("#r4"),
    document.querySelector("#r5")
]

const font = document.querySelector(".heading")

let a = 0, b = 0, c = 0, d = 0, f = 0

input[0].oninput = e => {
    console.log(e.target.value);
    a = e.target.value
    font.style.setProperty("font-variation-settings", `"MONO" ${a}, "CASL" ${b}, "CRSV" ${c}, "wght" ${d}, "slnt" ${f}`)
}

input[1].oninput = e => {
    b = e.target.value
    font.style.setProperty("font-variation-settings", `"MONO" ${a}, "CASL" ${b}, "CRSV" ${c}, "wght" ${d}, "slnt" ${f}`)
}

input[2].oninput = e => {
    c = e.target.value
    font.style.setProperty("font-variation-settings", `"MONO" ${a}, "CASL" ${b}, "CRSV" ${c}, "wght" ${d}, "slnt" ${f}`)
}

input[3].oninput = e => {
    d = e.target.value
    font.style.setProperty("font-variation-settings", `"MONO" ${a}, "CASL" ${b}, "CRSV" ${c}, "wght" ${d}, "slnt" ${f}`)
}

input[4].oninput = e => {
    f = e.target.value
    font.style.setProperty("font-variation-settings", `"MONO" ${a}, "CASL" ${b}, "CRSV" ${c}, "wght" ${d}, "slnt" ${f}`)
}