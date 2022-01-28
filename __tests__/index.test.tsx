import {render, screen} from '@testing-library/react';
import Home from '../pages/index';
import ControlsProvider from "../store/controls/provider";

describe('Home Page (index)', () => {
  test('<h1> should be in the document', () => {
    render(
      <ControlsProvider>
        <Home />
      </ControlsProvider>
    );
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
});
