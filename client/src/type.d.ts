interface Theme {
  colors: {
    black: string;
    white: string;
    grey: string;
    offWhite: string;
  };

  fonts: {
    primary: string;
  };

  fontSizes: {
    base: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };

  spacing: {
    base: string;
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

interface Item {
  name?: string;
  image: string;
  width?: string;
  height?: string;
}
