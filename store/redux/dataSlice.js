import { createSlice } from "@reduxjs/toolkit"




const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: JSON.parse(localStorage.getItem("data")) || [],
    },
    reducers: {
        // tambah data
        setData: (state, action) => {
            const dataItem = state.data.find((item) => item.id === action.payload.id);
            if (!dataItem) {
                state.data.push(action.payload);
                console.log("Data di redux: ", action.payload);
            }
        },
        // Mengupdate data berdasarkan ID
        updateData: (state, action) => {
            const index = state.data.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.data[index] = {
                    ...state.data[index],
                    ...action.payload,
                };
                console.log("Data diperbarui di Redux: ", action.payload);
            }
        },
        // delete data
        removeData: (state, action) => {
            const index = state.data.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.data.splice(index);
                console.log("Data dihapus di Redux: ", action.payload);
            }
        },
    },
});

export const { setData, updateData, removeData } = dataSlice.actions;
export default dataSlice.reducer;