export const theme = {
  colors: {
    background: {
      primary: "#0a0a0c",
      secondary: "#13131a",
      tertiary: "#1c1c26",
    },
    text: {
      primary: "#f8f8ff",
      secondary: "#a0a0b8",
    },
    accent: {
      primary: "#6366f1",
      primaryRGB: "99, 102, 241",
      muted: "rgba(99, 102, 241, 0.1)",
    },
    border: "rgba(255, 255, 255, 0.1)",
    glass: {
      background: "rgba(255, 255, 255, 0.03)",
      border: "rgba(255, 255, 255, 0.1)",
      blur: "12px",
    },
    shadow: {
      primary: "rgba(0, 0, 0, 0.12)",
      accent: "rgba(99, 102, 241, 0.3)",
      accentHover: "rgba(99, 102, 241, 0.4)",
    },
    error: "#ef4444",
    success: "#10b981",
  },
  borderRadius: {
    small: "12px",
    medium: "24px",
    large: "999px",
  },
  breakpoints: {
    mobile: "640px",
    tablet: "968px",
    desktop: "1440px",
  },
};

export default theme;
