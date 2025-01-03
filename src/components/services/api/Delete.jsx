// src/components/services/api/delete.jsx

export const handleDeleteItem = (film, setFilm) => {
    return (id) => {
        const confirmDelete = confirm("Apakah anda yakin ingin menghapus film ini dari daftar saya?");

        if (confirmDelete) {
            setFilm((prevItems) => prevItems.filter((item) => item.id !== id));
            alert(`Film telah dihapus dari daftar saya.`);
        } else {
            alert(`Film batal dihapus dari daftar saya.`);
        }
    };
};
