import {createMuiTheme} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/core';
import React from 'react';

/**
 * Material Theme,
 * @param {any} _props input children.
 * @return {JSX.Element} Material Theme.
 */
function MaterialTheme(_props: any) {

  const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            primary: {
              main: '#4caf50',
            },
            secondary: {
              main: '#388e3c',
            },
            error: {
              main: red.A400,
            },
            type: 'dark',
          },
        }),
      [],
  );

  return (
    <ThemeProvider theme={theme}>
      {_props.children}
    </ThemeProvider>
  );
}

export default MaterialTheme;
