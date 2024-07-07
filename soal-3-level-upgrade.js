const isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let startCheckedPrimeGame = true

while (startCheckedPrimeGame) {
    let num = prompt('Input angka apakah bilangan prima: ');
    num = Number(num);

    if (isNaN(num)) {
        alert('Masukkan angka yang valid');
    } else {
        let result = isPrime(num) ? 'adalah bilangan prima' : 'bukan bilangan prima';
        alert(`Angka ${num} ${result}`);
    }

    startCheckedPrimeGame = confirm('Apakah ingin mengecek angka lain?');
}

alert('Program selesai');