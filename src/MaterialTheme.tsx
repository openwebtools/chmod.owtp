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
              main: '#f2f2f7',
            },
            secondary: {
              main: '#d1d1d6',
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
