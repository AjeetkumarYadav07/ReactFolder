import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice"; // Ensure the path is correct

// Create store
const store = configureStore({
  reducer: {
    allCart: cartSlice, // Reducer name should match usage in components
  },
});

export default store; // ✅ Correct export
