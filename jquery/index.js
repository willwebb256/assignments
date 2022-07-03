var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}


