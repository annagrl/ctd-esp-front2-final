import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteReducer from "./features/quote/quoteSlice";
import { RootState } from "./app/store";

const customRender = (
    ui: React.ReactElement,
    {
      preloadedState,
      store = configureStore({
        reducer: {
          quote: quoteReducer,
        },
        preloadedState,
      }),
      ...renderOptions
    }: {
      preloadedState?: RootState;
      store?: ReturnType<typeof configureStore>;
    } = {}
  ) => {
    const Wrapper: React.FC<{
      children: React.ReactNode;
    }> = ({ children }) => <Provider store={store}>{children}</Provider>;
  
    render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    });
  };

  
  export * from "@testing-library/react";


  export { customRender as render };