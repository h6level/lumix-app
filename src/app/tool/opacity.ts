const primaryOpacity = (opacity: number) => `rgba(245, 0, 87, ${opacity})`;
const secondaryOpacity = (opacity: number) => `rgba(213, 0, 249, ${opacity})`;
const successOpacity = (opacity: number) => `rgba(67, 160, 71, ${opacity})`;
const infoOpacity = (opacity: number) => `rgba(41, 121, 255, ${opacity})`;
const warningOpacity = (opacity: number) => `rgba(255, 61, 0, ${opacity})`;
const errorOpacity = (opacity: number) => `rgba(213, 0, 0, ${opacity})`;
const blackOpacity = (opacity: number) => `rgba(0, 0, 0, ${opacity})`;
const whiteOpacity = (opacity: number) => `rgba(255, 255, 255, ${opacity})`;

export {
  primaryOpacity, secondaryOpacity, successOpacity,
  infoOpacity, warningOpacity, errorOpacity,
  blackOpacity, whiteOpacity,
};
