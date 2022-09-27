import React from 'react';
import { ThemeProvider } from 'theme-ui';

import { future } from '@theme-ui/presets';

const tokens = {
  ...future,
  // sizes: {container: 1200}
}

const WrapRootElement = ({element}) => (
  <ThemeProvider theme={tokens}>
    {element}
  </ThemeProvider>
);

export default WrapRootElement;