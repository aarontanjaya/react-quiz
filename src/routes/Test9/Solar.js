import { useEffect, useState } from "react";
import { cssSpace, cssSun, cssPlanet, cssPlanetContainer } from "./style";

const Solar = ({ num }) => {
  const [planets, setPlanets] = useState([])
  const getFloorValue = (n) => Math.floor(n);

  const generatePlanets = (n, startingDistance, startingSpeed, existingColors) =>{
    let distance = startingDistance
    let speed = startingSpeed
    let colors = new Set(existingColors ? existingColors : [])
    let result = []
    for(let idx = 0; idx < n; idx++){
      let currentPlanet = generatePlanet(distance, speed, colors)
      speed -= 5
      distance += 20
      colors.add(currentPlanet.color)
      result.push(currentPlanet)
    }
    return result
  }

  const generatePlanet = (distance, speed, existingColors)=>{
    let color = getNewColor(existingColors)
    return {
      distance: distance,
      speed: speed,
      color: color
    }
  }

  const getNewColor = (colors) => {
    console.log('color', colors)
    while (true) {
      let color = `rgba(${getFloorValue(Math.random() * 255)}, ${getFloorValue(
        Math.random() * 255
      )}, ${getFloorValue(Math.random() * 255)}, ${
        Math.random()
      })`;
      if (!colors.has(color)) {
        return color;
      }
    }
  };

  useEffect(() => {
    let newPlanets = generatePlanets(num ? num : 0, 100, 720, [])
    setPlanets(newPlanets)
  }, [num]);

  return (
    <div className={cssSpace}>
      {/* <div className={cssSun}/> */}
      {/* answer */}
      <div className={cssSun}>
        {planets.map((item, idx) => 
            <div
              key={`${idx}-${num}`}
              className={cssPlanetContainer(item.speed, item.distance)}
            >
              <div className={cssPlanet(item.color)} />
            </div>
          )}
      </div>
    </div>
  );
};

export default Solar;
