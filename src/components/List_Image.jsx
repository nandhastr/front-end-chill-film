/* eslint-disable react/prop-types */
import {useState} from 'react'

const List_Image = ({ title, initialItems }) => {
    const [items, setItems] = useState(initialItems);
    const [showAll, setShowAll] = useState(true);
    const isMyListPage = location.pathname === "/MyList";

    const handleDeleteItem = (id) => {
        const confirmDelete = confirm("Apakah anda yakin ingin menghapus film ini dari daftar saya?");

        if (confirmDelete) {
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
            alert(`Film telah dihapus dari daftar saya.`);
        } else {
            alert(`Film batal dihapus dari daftar saya.`);
        }
    };

    return (
        <>
            <section className="mb-4 mt-12">
                <div className="px-6 flex flex-col sm:gap-6">
                    <div className="flex justify-between top-4 mb-4">
                        {<h2 className="font-semibold text-sm sm:text-2xl">{title}</h2>}
                        {items.length > 6 && (
                            <div className=" flex justify-center">
                                {!isMyListPage &&
                                <button className=" text-blue-500 hover:underline" onClick={() => setShowAll(!showAll)}>
                                    {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
                                </button>}
                            </div>
                        )}
                    </div>
                    <div className="grid grid-cols-3  md:grid-cols-6 gap-2 ">
                        {(showAll ? items : items.slice(0, 6)).map((item, index) => (
                            <div key={index} className="carousel-item relative">
                                {item.status ? (
                                    <>
                                        <div className="absolute top-1 left-1 sm:left-4 w-auto bg-blue-600 text-white rounded-full">
                                            <div className="flex justify-between items-center px-1 sm:px-2">
                                                <p className="sm:text-[10px] text-[4px]">{item.status}</p>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                {item.ratingTop ? (
                                    <>
                                        <div className="absolute pt-1 right-2 sm:right-2 bg-red-600 text-white h-auto sm:w-6 w-3 rounded-sm">
                                            <div className="flex justify-between items-center text-center">
                                                <p className="sm:text-[10px] text-[4px] text-center sm:text-center">{item.ratingTop}</p>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                {/* btn hapus */}
                                <button className="absolute right-[-0.10rem] top-[-0.9rem] bg-transparent border text-white text-[10px] w-[1rem] justify-center items-center rounded-full hover:bg-red-800 transition" onClick={() => handleDeleteItem(item.id)}>
                                    x
                                </button>

                                <img src={item.url} alt={item.title} className=" w-full object-cover rounded-lg hover:scale-[1.05] transition duration-500 mb-2" />

                                <div className="relative">
                                    <div className="absolute bottom-0 left-0 w-full p-3 text-white rounded-b-lg">
                                        <div className="flex justify-between items-center px-2">
                                            {item.title || item.rating ? (
                                                <>
                                                    {item.title && <h4 className="text-sm font-medium">{item.title}</h4>}
                                                    {item.rating && <p className="text-sm">⭐ {item.rating}</p>}
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default List_Image
