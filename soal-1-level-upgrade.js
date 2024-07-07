// pseudocode untuk mengubah nilai dengan ketentuan sebagai berikut:
// nilai < 60 = D
// nilai < 75 = C
// nilai < 85 = B
// nilai >= 85 = A 

function inputValue(nilai) {
    let grade;

    if (nilai < 60){
        grade = 'D';
    } else if (nilai < 75){
        grade = 'C';
    } else if (nilai < 85) {
        grade = 'B';
    } else if (nilai >= 85) {
        grade = 'A'
    }
    return grade
}

let continueProgramHitung = true;

while (continueProgramHitung) {
    let nilai = prompt(`Masukkan Nilai: `);
    nilai = Number(nilai) // make sure nilai is Number
    let grade = inputValue(nilai);
    alert(`Nilai ${nilai} dinyatakan ${grade}`)

    continueProgramHitung = confirm(`Input Value lagi?`)
}

alert(`Program Selesai`)