import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobileMenuModalOpen: false,
    isContactModalOpen: false
}

const modalSlice = createSlice({
    name: "modalSlice",
    initialState,
    reducers: {
        setIsMobileMenuModalOpen: (state) => {
            state.isMobileMenuModalOpen = true
            document.body.classList.add('overflow-hidden');
        },
        setIsContactModalOpen: (state) => {
            state.isContactModalOpen = true
            document.body.classList.add('overflow-hidden');
        },
        onClose: (state) => {
            state.isMobileMenuModalOpen = false
            state.isContactModalOpen = false
            document.body.classList.remove('overflow-hidden');
        }
    }
})

export const { onClose, setIsMobileMenuModalOpen, setIsContactModalOpen } = modalSlice.actions

export default modalSlice.reducer