function hitLebar () {
    let inputElement1 = document.getElementById("inpLebar");
    let inputElement2 = document.getElementById("inpTinggi");
    let hasilElement1 = document.getElementById("hasil1");
    let hasilElement2 = document.getElementById("hasil2");
    let hasilElement4 = document.getElementById("hasil4");
    let hasilElement3 = document.getElementById("hasil3");
    let hasilElement41 = document.getElementById("hasil41");
    let hasilElement42 = document.getElementById("hasil42");
    
    // dapatkan nomor dari input\\
    let lebar = inputElement1.value; 
    let tinggi = inputElement2.value;
    
    let hasil1 = lebar * 96;
    let hasil2 = tinggi * 96;

    hasilElement1.innerHTML = hasil1 + "cm";
    hasilElement2.innerHTML = hasil2 + "cm";
    hasilElement4.innerHTML = (hasil1 * hasil2) / 512 + " Module";
    
    hasilElement3.innerHTML = ((hasil1 * 10) / 320) * 128 + " x " + ((hasil2 * 10) / 160) * 64;

    hasilElement41.innerHTML = ((hasil1 * 10) / 320) + " Module";
    hasilElement42.innerHTML = ((hasil2 * 10) / 160) + " Module";
}

function fun () {
    document.getElementById("myForm1").reset();
}

function hitLebarB () {
    let inputElementb1 = document.getElementById("inpLebarB");
    let inputElementb2 = document.getElementById("inpTinggiB");
    let hasilElementb1 = document.getElementById("hasilb1");
    let hasilElementb2 = document.getElementById("hasilb2");
    let hasilElementb4 = document.getElementById("hasilb4");
    let hasilElementb3 = document.getElementById("hasilb3");
    let hasilElementb41 = document.getElementById("hasilb41");
    let hasilElementb42 = document.getElementById("hasilb42");
    
    // dapatkan nomor dari input\\
    let lebarB = inputElementb1.value; 
    let tinggiB = inputElementb2.value;
    
    let hasilb1 = lebarB * 96;
    let hasilb2 = tinggiB * 96;

    hasilElementb1.innerHTML = hasilb1 + "cm";
    hasilElementb2.innerHTML = hasilb2 + "cm";
    hasilElementb4.innerHTML = (hasilb1 * hasilb2) / 512 + " Module";
    
    hasilElementb3.innerHTML = ((hasilb1 * 10) / 320) * 80 + " x " + ((hasilb2 * 10) / 160) * 40;

    hasilElementb41.innerHTML = ((hasilb1 * 10) / 320) + " Module";
    hasilElementb42.innerHTML = ((hasilb2 * 10) / 160) + " Module";
}

function funB () {
    document.getElementById("myForm2").reset();
}

function hitLebarC () {
    let inputElementc1 = document.getElementById("inpLebarC");
    let inputElementc2 = document.getElementById("inpTinggiC");
    let hasilElementc1 = document.getElementById("hasilc1");
    let hasilElementc2 = document.getElementById("hasilc2");
    let hasilElementc4 = document.getElementById("hasilc4");
    let hasilElementc3 = document.getElementById("hasilc3");
    let hasilElementc41 = document.getElementById("hasilc41");
    let hasilElementc42 = document.getElementById("hasilc42");
    
    // dapatkan nomor dari input\\
    let lebarC = inputElementc1.value; 
    let tinggiC = inputElementc2.value;
    
    let hasilc1 = lebarC * 96;
    let hasilc2 = tinggiC * 96;

    hasilElementc1.innerHTML = hasilc1 + "cm";
    hasilElementc2.innerHTML = hasilc2 + "cm";
    hasilElementc4.innerHTML = (hasilc1 * hasilc2) / 512 + " Module";
    
    hasilElementc3.innerHTML = ((hasilc1 * 10) / 320) * 40 + " x " + ((hasilc2 * 10) / 160) * 20;

    hasilElementc41.innerHTML = ((hasilc1 * 10) / 320) + " Module";
    hasilElementc42.innerHTML = ((hasilc2 * 10) / 160) + " Module";
}

function funC () {
    document.getElementById("myForm3").reset();
}