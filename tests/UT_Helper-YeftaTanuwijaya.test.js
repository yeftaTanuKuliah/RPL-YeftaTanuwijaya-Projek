const operasiAritmatika = require("../helper/Helper-YeftaTanuwijaya");

test("4 + 2 = 6", () => {
  const operasi = new operasiAritmatika();
  expect(operasi.tambah(4, 2)).toBe(6);
});

test("4 - 2 = 2", () => {
  const operasi = new operasiAritmatika();
  expect(operasi.kurang(4, 2)).toBe(2);
});

test("4 / 2 = 2", () => {
  const operasi = new operasiAritmatika();
  expect(operasi.bagi(4, 2)).toBe(2);
});

test("4 * 2 = 8", () => {
  const operasi = new operasiAritmatika();
  expect(operasi.kali(4, 2)).toBe(8);
});