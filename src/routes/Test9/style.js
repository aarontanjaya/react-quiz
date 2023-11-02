import { css, keyframes } from "react-emotion";

const rotate = keyframes`
from{
  transform: rotateZ(0deg);
}
to{
  transform: rotateZ(360deg);
}
`;

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
});

export const cssSun = css({
  position: "relative",
  width: 80,
  height: 80,
  backgroundColor: "yellow",
  borderRadius: 40,
});

export const cssPlanet = (color) =>
  css({
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: color ? color : "red",
  });

export const cssPlanetContainer = (deg, dist) =>
  css({
    position: "absolute",
    left: 40,
    top: 40,
    paddingLeft: `${dist ? dist : 100}px`,
    transformOrigin: "left top",
    animation: `${rotate} ${3600 / deg}s linear infinite`,
  });
