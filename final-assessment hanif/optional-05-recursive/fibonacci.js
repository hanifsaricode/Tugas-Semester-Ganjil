function fibonacci(n) {
    // Basis kasus untuk nilai pertama (0) dan kedua (1)
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
  
    // Rekurens: dapatkan deret Fibonacci hingga elemen ke (n - 1)
    const sequence = fibonacci(n - 1);
    // Tambahkan elemen ke-n yang merupakan jumlah dari dua elemen terakhir
    sequence.push(sequence[n - 1] + sequence[n - 2]);
    return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
