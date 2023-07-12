import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./dispatch/index";

export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});