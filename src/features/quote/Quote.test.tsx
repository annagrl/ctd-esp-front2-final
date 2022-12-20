import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Cita } from "./Cita";
import { store } from "../../app/store";
import { Provider } from "react-redux";

const mockSearch = jest.fn();

describe("Cita", () => {

  describe("When render default state, in the form presents:", () => {
    it("sentence: Nenhuma citação encontrada.", async () => {
      render(
        <Provider store={store}>
          <Cita />
        </Provider>
      );
      expect(screen.getByText("Nenhuma citação encontrada.")).toBeInTheDocument();

    })

    it("placeholder: Digite o autor: Homer, Bart, Lisa, Maggie, Marge...", async () => {
      render(
        <Provider store={store}>
          <Cita/>
        </Provider>
      );
      expect(screen.getAllByPlaceholderText("Digite o nome do personagem: Homer, Bart, Lisa, Maggie, Marge...")).not.toBeNull();
    })
  });
});