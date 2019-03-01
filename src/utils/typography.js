import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Bitter",
      styles: ["400"]
    },
    {
      name: "Open Sans",
      styles: ["400", "400i"]
    }
  ],
  headerFontFamily: ["Bitter", "Georgia", "serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"]
});

export default typography;
