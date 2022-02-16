import React from 'react';
import {screen, render} from '@testing-library/react';
import Viewer from '../../components/viewer';
import ControlsProvider from '../../store/controls/provider';

describe('<Viewer />', () => {
  const ViewerWithProvider = () => (
    <ControlsProvider>
      <Viewer />
    </ControlsProvider>
  );

  it('should be in the document', () => {
    render(<ViewerWithProvider />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });
});
