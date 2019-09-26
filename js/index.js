alphabetize.onclick = function() {
  txt.value = (txt.value.split("\n").sort(caseInsensitive).join("\n"))

  function caseInsensitive(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  }
};
