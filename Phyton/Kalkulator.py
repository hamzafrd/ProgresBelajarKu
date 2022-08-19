class Kalkulator:
    """contoh kelas kalkulator anggap kelas ini tidak boleh diubah!"""

    def __init__(self, nilai=0):
        self.nilai = nilai

    def tambah_angka(self, angka1, angka2):
        self.nilai = angka1 + angka2
        if self.nilai > 9:
            print('kalkulator melebihi batas angka: {}'.format(self.nilai))
        return self.nilai


class KalkulatorKali(Kalkulator):
    """contoh mewarisi kelas kalkulator sederhana"""

    def kali_angka(self, angka1, angka2):
        self.nilai = angka1 * angka2
        return self.nilai

    def tambah_angka(self, angka1, angka2):
        if angka1 + angka2 >= 9:  # fitur ini sudah ada di kelas dasar,
            # panggil fungsi dari Kalkulator lalu isi nilai
            super().tambah_angka(angka1, angka2)
            print('test super')
        else:  # ini adalah fitur baru yang ingin diperbaiki
            self.nilai = angka1 + angka2
            print('test else')
        return self.nilai


kk = KalkulatorKali()
# sesuai dengan definisi class memiliki fitur kali_angka
a = kk.kali_angka(2, 3)
print(a)

# memiliki fitur tambah_angka karena mewarisi dari Kalkulator
b = kk.tambah_angka(9, 2)
print(b)
