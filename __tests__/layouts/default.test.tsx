import {render, screen} from "@testing-library/react";
import DefaultLayout from "../../layouts/default";
import ControlsProvider from "../../store/controls/provider";

describe('<DefaultLayout>', () => {
  test('it should render its children', () => {
    render(
      <ControlsProvider>
        <DefaultLayout>
          <h1>Hello World</h1>
        </DefaultLayout>
      </ControlsProvider>
    );

    const h1 = screen.getByRole('heading', {name:/hello world/i});
    expect(h1).toBeInTheDocument();
  })
})
