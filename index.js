function dealWith() {

    let names = ['Manju', 'Ram', 'Pavan', 'Hari'];
    names.forEach((el, index) => {

        document.getElementById(`print-${index+1}`).innerHTML = (`${index+1}: Hello Mister ${el}`);
    })
}