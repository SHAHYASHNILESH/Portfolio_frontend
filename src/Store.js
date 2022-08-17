import { configureStore } from "@reduxjs/toolkit";
import { userReducer,loginReducer,updateReducer} from "./reducers/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    update: updateReducer,
  },
});

export default store;