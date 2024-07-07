function getGrade(nilai) {
    let grade;
    if (nilai < 60) {
        grade = 'D';
    } else if (nilai < 75) {
        grade = 'C';
    } else if (nilai < 85) {
        grade = 'B';
    } else if (nilai >= 85) {
        grade = 'A';
    }
    return grade;
}

let nilai = prompt('Masukkan Nilai: ');
let grade = getGrade(nilai);
alert(`Nilai ${nilai} dinyatakan ${grade}`)

confirm('Input value lagi?')