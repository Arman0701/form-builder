import { store } from "@/store";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HeroUIProvider>
          <ToastProvider
            toastProps={{
              variant: "flat",
              timeout: 3000,
            }}
          />
          {children}
        </HeroUIProvider>
      </Provider>
    </BrowserRouter>
  );
};
