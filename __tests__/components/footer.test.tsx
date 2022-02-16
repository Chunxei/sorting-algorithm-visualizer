import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import Footer from '../../components/footer';
import styles from '../../components/footer/footer.module.scss';
import ControlsProvider from '../../store/controls/provider';

describe('Footer', () => {
  const FooterWithProvider = () => (
    <ControlsProvider>
      <Footer />
    </ControlsProvider>
  );

  it('should be in the document', () => {
    render(<FooterWithProvider />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it(`should toggle a controls modal when
  "Playback Controls" is clicked on mobile
  `, () => {
    render(<FooterWithProvider />);

    const controls = screen
        .queryByRole('region', {name: /playback controls menu/i});

    expect(controls).toBeInTheDocument();
    expect(controls).not.toHaveClass(styles.active);

    const controlsButton = screen
        .getByRole('button', {name: /toggle playback controls menu/i});

    expect(controlsButton).toBeInTheDocument();

    fireEvent.click(controlsButton);

    expect(controls).toHaveClass(styles.active);
  });
});
