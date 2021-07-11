import { createGlobalStyle } from 'styled-components';

import Rojdhani400Woff2 from './rajdhani-v10-latin-ext_latin-regular.woff2';
import Rojdhani400Woff from './rajdhani-v10-latin-ext_latin-regular.woff';
import Rojdhani700Woff2 from './rajdhani-v10-latin-ext_latin-700.woff2';
import Rojdhani700Woff from './rajdhani-v10-latin-ext_latin-700.woff';
import Poppins400Woff from './poppins-v15-latin-ext_latin-regular.woff';
import Poppins400Woff2 from './poppins-v15-latin-ext_latin-regular.woff2';
import Poppins700Woff from './poppins-v15-latin-ext_latin-700.woff';
import Poppins700Woff2 from './poppins-v15-latin-ext_latin-700.woff2';

export default createGlobalStyle`
@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 400;
  src: local('Rajdhani'), local('Rajdhani'),
    url(${Rojdhani400Woff}) format('woff'),
    url(${Rojdhani400Woff2}) format('woff2');
};
@font-face {
  font-family: 'Rajdhani';
  font-style: normal;
  font-weight: 700;
  src: local('Rajdhani'), local('Rajdhani'),
    url(${Rojdhani700Woff}) format('woff'),
    url(${Rojdhani700Woff2}) format('woff2');
};
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins'), local('Poppins'),
    url(${Poppins400Woff}) format('woff'),
    url(${Poppins400Woff2}) format('woff2');
};
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins'), local('Poppins'),
    url(${Poppins700Woff}) format('woff'),
    url(${Poppins700Woff2}) format('woff2');
}
`;
