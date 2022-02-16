import React from 'react';
import {render, screen} from '@testing-library/react';
import DefaultLayout, {DefaultLayoutProps} from '../../layouts/default';
import ControlsProvider from '../../store/controls/provider';


describe('<DefaultLayout>', () => {
  const DefaultLayoutWithProvider = (props: DefaultLayoutProps) =>(
    <ControlsProvider>
      <DefaultLayout>
        {props.children}
      </DefaultLayout>
    </ControlsProvider>
  );

  it('should be in the document', () => {
    render(<DefaultLayoutWithProvider />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render its children', () => {
    render(
        <DefaultLayoutWithProvider>
          <h1>default.test.tsx</h1>
        </DefaultLayoutWithProvider>,
    );

    expect(screen.getByText('default.test.tsx')).toBeInTheDocument();
  });
});
