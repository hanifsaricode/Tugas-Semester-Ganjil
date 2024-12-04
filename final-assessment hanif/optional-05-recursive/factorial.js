function factorial(n) {
    // Basis kasus: jika n adalah 0 atau 1, kembalikan 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Rekurens: hitung faktorial dengan mengalikan n dengan faktorial dari n - 1
    return n * factorial(n - 1);
  }

// Jangan hapus kode di bawah ini!
export default factorial;
