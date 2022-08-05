// Anggap ini adalah data yang ada di dalam database 
const data = [1, 2, 3, 4, 5, 6, 7]

function hapusData(callback) {
    console.log('sedang menghapus data....')
    setTimeout(function () {
        // hapus salah satu data
        data.pop();
        callback()
    }, 500);
}

// function tampilData() {
//     setTimeout(function () {
//         // tampilkan semua data
//         console.log(data)
//     }, 300);
// }

hapusData(() => console.log(data))

//////////////////////////////////////////////atauu dengan HOF

function hapusData2(callback) {
    console.log('sedang menghapus data....')
    setTimeout(function () {
        // hapus salah satu data
        data.pop();
        callback(data)
    }, 500);
}

hapusData2((displayCallback) => console.log(displayCallback))
