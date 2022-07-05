import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/rootReducer';

interface PendingRoute {
    pendingRoute: string | null
}

const initialState: PendingRoute = {
    pendingRoute: null
};

const routingSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setPendingRoute: (
        state: PendingRoute,
        { payload }: PayloadAction<string | null>
      ) => {
        console.log(payload);
        state.pendingRoute = payload;
      }
    }
  });
  
  export const routingReducer = routingSlice.reducer;
  export const { setPendingRoute } = routingSlice.actions;
  export const routingState = (state: RootState) => state.routing;
  