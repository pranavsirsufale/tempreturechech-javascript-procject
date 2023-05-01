const calculteTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    console.log(valueTemp);
    

    const celToFeh = (cel) => {
        let fehrenheiht = Math.round((cel *9/5) + 32);
        return fehrenheiht;
    }

    const fehToCel =  (fehr) => {
        let celsius = Math.round((fehr - 32 ) * 5 / 9);
        return celsius;
    }
    
    let result;

    if(valueTemp == 'cel'){
        let result = celToFeh(numberTemp);
        document.getElementById('resultContainer').innerHTML = result + " fehreiht";
    }else{
        let result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = result + " celsius";

    }
}
