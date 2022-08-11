const daftarBuku = [];
const filterEvent = 'filter-status'
const bukuStorage = 'storage-buku'

function objectBuku(
    judul,
    penulis,
    tahun,
    statusBaca,
    id) {
    return {
        judul,
        penulis,
        tahun,
        statusBaca,
        id
    }
}
function buatID() {
    return +new Date();
}

document.addEventListener('DOMContentLoaded', () => {
    loadStorage()
    const bukuForm = document.getElementById('inputBook')
    bukuForm.addEventListener('submit', (ev) => {
        ev.preventDefault()
        addBuku()
    })

    const searchForm = document.getElementById('searchBook')
    searchForm.addEventListener('submit', function (ev) {
        ev.preventDefault()
        document.dispatchEvent(new Event(filterEvent))
    })
})

function addBuku() {
    const judul = document.getElementById('inputBookTitle').value;
    const penulis = document.getElementById('inputBookAuthor').value;
    const tahun = document.getElementById('inputBookYear').value;
    const statusBaca = document.getElementById('inputBookIsComplete').checked;
    const idbuku = buatID();
    // ingat dengan FP ? ini salah.
    // objectBuku(judul,penulis,tahun,statusBaca);
    // daftarBuku.push(objectBuku)

    // ini benar
    const objectBaru = objectBuku(judul, penulis, tahun, statusBaca, idbuku);
    daftarBuku.push(objectBaru);

    document.dispatchEvent(new Event(filterEvent));
    saveStorage()
}

// const cariBuku = () => {
//     const selesaiBaca = document.getElementById('completeBookshelfList');
//     const sedangDibaca = document.getElementById('incompleteBookshelfList')
//     selesaiBaca.innerHTML = ''
//     sedangDibaca.innerHTML = ''

//     const inputan = document.getElementById('searchBookTitle').value
//     const bookitem = document.querySelector('.book_item')
//     for (const item of daftarBuku) {
//         if (item.judul.includes(inputan)) {
//             document.dispatchEvent(new Event(filterEvent))
//         }
//     }
// }
document.addEventListener((filterEvent), () => {
    const selesaiBaca = document.getElementById('completeBookshelfList');
    const sedangDibaca = document.getElementById('incompleteBookshelfList')
    const inputan = document.getElementById('searchBookTitle').value
    //clear&refresh display
    selesaiBaca.innerHTML = ''
    sedangDibaca.innerHTML = ''

    for (const item of daftarBuku) {
        if (item.judul.includes(inputan)) {
            const itemDOM = makeDOM(item)
            if (item.statusBaca) {
                selesaiBaca.append(itemDOM)
            } else {
                sedangDibaca.append(itemDOM)
            }
        }
    }
})

function makeDOM(object) {
    const {
        judul,
        penulis,
        tahun,
        statusBaca,
        id } = object;

    const titlebook = document.createElement('h3');
    titlebook.innerText = judul;

    const penulisbook = document.createElement('p')
    penulisbook.innerText = `Penulis : ${penulis}`;

    const tahunbook = document.createElement('p')
    tahunbook.innerText = `Tahun : ${tahun}`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('action')

    const buttonselesai = document.createElement('button');
    buttonselesai.classList.add('green')

    if (statusBaca) {
        buttonselesai.innerText = 'Belum Selesai di Baca';
        buttonselesai.addEventListener('click', () => {
            undoStatusBuku(id);
            saveStorage();
        })
    } else {
        buttonselesai.innerText = 'Selesai baca';
        buttonselesai.addEventListener('click', () => {
            moveStatusBukuToSelesai(id)
            saveStorage();
        })
    }

    const buttonHapus = document.createElement('button');
    buttonHapus.innerText = 'Hapus Buku'
    buttonHapus.classList.add('red')
    buttonHapus.addEventListener('click', function () {
        buttonHapus.innerText = 'Hapus Buku';
        deleteBuku(id);
        saveStorage();
    })

    buttonContainer.append(buttonselesai, buttonHapus)
    const container = document.createElement('article');
    container.classList.add('book_item')
    container.append(titlebook, penulisbook, tahunbook, buttonContainer);
    container.setAttribute('id', `buku-${id}`);

    return container;
}

const deleteBuku = (idbuku) => {
    const getposisi = listbuku(idbuku)
    if (getposisi == -1) return;

    daftarBuku.splice(getposisi, 1)
    document.dispatchEvent(new Event(filterEvent))
}

const listbuku = (idbuku) => {
    for (const index in daftarBuku) {
        if (daftarBuku[index].id == idbuku) {
            return index;
        }
    }
    return -1;
}

const undoStatusBuku = (idbuku) => {
    for (const item of daftarBuku) {
        if (item.id === idbuku) {
            item.statusBaca = false;
            document.dispatchEvent(new Event(filterEvent))
        };
    }
    return;
}

const moveStatusBukuToSelesai = (idbuku) => {
    for (const item of daftarBuku) {
        if (item.id === idbuku) {
            item.statusBaca = true;
            document.dispatchEvent(new Event(filterEvent))
        };
    }
    return;
}

const saveStorage = () => {
    localStorage.setItem(bukuStorage, JSON.stringify(daftarBuku))
}

const loadStorage = () => {
    const loaded = localStorage.getItem(bukuStorage);
    const parsed = JSON.parse(loaded);

    if (parsed != null) {
        (parsed.length == 0) ? localStorage.removeItem(bukuStorage) : undefined;
        for (const item of parsed) {
            daftarBuku.push(item)
        }
        document.dispatchEvent(new Event(filterEvent))
    }
}