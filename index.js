function dealWith() {

    let names = ['manju', 'ram', 'pavan'];
    names.forEach(function getName(el, index) {
        document.getElementById("print").innerHTML = (`${index+1}: Hello Mister ${el}`);
        // document.write(`${index+1 } hello mister ${el}<br/>`); // second way
    })
}