import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ApiState {
    isLoading: boolean;
    data: any;
    isError: boolean;
}

// Get
export const fetchData = createAsyncThunk('fetchData', async (dbName: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(apiUrl + dbName);
    return response.data;
})

//Post
export const postData = createAsyncThunk('postData', async (e: { dbName: string, userdata: object }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const config = {
        method: 'post',
        url: apiUrl + e.dbName,
        headers: {
            'Content-Type': 'application/json',
        },
        data: e.userdata
    };

    const response = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    return response
}
)

//Update
export const updateData = createAsyncThunk('updateData', async (e: { dataUrl: string, appliedData: object }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.put(apiUrl + e.dataUrl, e.appliedData);
    return response.data;
})

// Slice
const apiSlice = createSlice({
    name: 'apiData',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    } as ApiState,
    reducers: {},
    extraReducers: (builder) => {
        // API Fetching (GET) is pending
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        });
        // API Request fulfilled (Success)
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        // Request is rejected
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isError = true;
            console.error("Error", action.error);
        });

        // API Fetching (POST) is pending
        builder.addCase(postData.pending, (state) => {
            state.isLoading = true;
        });
        // API Request fulfilled (Success)
        builder.addCase(postData.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        // Request is rejected
        builder.addCase(postData.rejected, (state, action) => {
            state.isError = true;
            console.error("Error", action.error);
        });

        // API Fetching (PUT) is pending
        builder.addCase(updateData.pending, (state) => {
            state.isLoading = true;
        });
        // API Request fulfilled (Success)
        builder.addCase(updateData.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        // Request is rejected
        builder.addCase(updateData.rejected, (state, action) => {
            state.isError = true;
            console.error("Error", action.error);
        });
    }
})

const apiReducer = apiSlice.reducer;

export default apiReducer;