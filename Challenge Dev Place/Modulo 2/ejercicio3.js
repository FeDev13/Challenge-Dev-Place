function sumaRecursiva(num) {
  if (num <= 1) {
    return num;
  }
  return num + sumaRecursiva(num - 1);
}
