// colors
const Blue = '#00C5D8';
const Blue2 = '#07B5DA';
const DarkBlue = '#475BC3';
const Green = '#1FDEB2';
const Green2 = '#05D3CF';
const GreenLight = '#4BE7B7';

// sizes
const MediumScreen = '960';
const MediumSmallScreen = '600';
const SmallScreen = '400';

export default {
  Blue,
  Blue2,
  DarkBlue,
  Green,
  Green2,
  GreenLight,
  GradientBlueGreen: `linear-gradient(to right,${Blue2} 0,${Green} 100%)`,
  GradientGreenDarkBlue: `linear-gradient(to right,${Green2} 0,${DarkBlue} 100%)`,
  GradientText: `-webkit-linear-gradient(50deg,${Blue2} 0,${Green} 100%)`,
  // queries
  MediaQueryMedium: `@media(min-width: ${MediumScreen}px)`,
  MediaQueryMediumSmall: `@media(min-width: ${MediumSmallScreen}px)`,
  MediaQuerySmall: `@media(min-width: ${SmallScreen}px)`,
};
