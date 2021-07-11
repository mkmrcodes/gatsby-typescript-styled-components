type BPsize = {
  phone: string;
  tablet: string;
  laptop: string;
  desktop: string;
};
type BPdevice = {
  phone: string;
  tablet: string;
  laptop: string;
  desktop: string;
};

export const size: BPsize = {
  phone: '576px',
  tablet: '768px',
  laptop: '992px',
  desktop: '1200px',
};
export const device: BPdevice = {
  phone: `(min-width: ${size.phone})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const theme = {
  colors: {
    primary: {
      DEFAULT: '#5798B3',
      hover: '#467A8F',
      active: '#345B6B',
      focus: '#5798B3',
      disabled: '#eef5f7',
      text: '#FFFFFF',
    },
    secondary: {
      DEFAULT: '#6557B3',
      hover: '#51468F',
      active: '#3D346B',
      focus: '#8479C2',
      disabled: '#E0DDF0',
      text: '#000000',
    },
    tertiary: {
      DEFAULT: '#B35777',
      hover: '#8F465F',
      active: '#6B3447',
      focus: '#C27992',
      disabled: '#E8CDD6',
    },
    dark: '#0E0E2C',
    success: '#4BB543',
    error: '#B00020',
    accent: '#ECF1F4',
    light: '#FAFCFE',
    head: '#E53E29',
    nightblue: '#2991e5',
    gray: '#C2C2C2',
    darklight: '#1C1C1C',
  },
  breakpoints: {
    phone: device.phone,
    tablet: device.tablet,
    laptop: device.laptop,
    desktop: device.desktop,
  },
  fonts: {
    display: 'Rajdhani',
    body: 'Poppins',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  shadow: `rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
  rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
  rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`,
};
