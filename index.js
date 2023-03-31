function calculate() {


    let n = document.getElementById("Degree").value;

    let c = document.getElementById("Type").value;

    n = parseInt(n);
    console.log(((n - 32) * 5) / 9);
    let result;
    let output = document.getElementById("output");
    console.log(c)
    if (c === "Fahrenheit") {
        console.log(n);
        result = (((n - 32) * 5) / 9);

    }
    else {
        result = ((n * 9) / 5) + 32;

    }

    output.innerHTML = result.toFixed(2);





}