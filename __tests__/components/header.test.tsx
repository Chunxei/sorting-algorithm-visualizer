import React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import Header from '../../components/header';
import styles from '../../components/header/header.module.scss';
import ControlsProvider from '../../store/controls/provider';

describe('<Header />', () => {
  const HeaderWithProvider = () => (
    <ControlsProvider>
      <Header />
    </ControlsProvider>
  );

  it('should be in the document', () => {
    render(<HeaderWithProvider />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should toggle a configuration modal when "Configure" is clicked', () => {
    render(<HeaderWithProvider />);

    const nav = screen.queryByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).not.toHaveClass(styles.visible);

    const configButton = screen
        .getByRole('button', {name: /toggle configuration menu/i});

    expect(configButton).toBeInTheDocument();

    fireEvent.click(configButton);

    expect(nav).toHaveClass(styles.visible);
  });
});
