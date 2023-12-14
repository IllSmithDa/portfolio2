import { useMemo, useState } from "react";
import "./Particles.scss";
import fallLeaf1 from "../../assets/images/fall_leaf_1.webp";
import fallLeaf2 from "../../assets/images/fall_leaf_2.webp";
import fallLeaf3 from "../../assets/images/fall_leaf_3.webp";
import fallLeaf4 from "../../assets/images/fall_leaf_4.webp";
import fallLeaf5 from "../../assets/images/fall_leaf_5.webp";

const leafMap = {
  [1 as number]: fallLeaf1,
  [2 as number]: fallLeaf2,
  [3 as number]: fallLeaf3,
  [4 as number]: fallLeaf4,
  [5 as number]: fallLeaf5,
}

interface ImageObj {
  id: number,
  image: string,
}

export default function Particles () {
  const [particleArr, setParticleArr] = useState<ImageObj[]>([]);
  const randomIntFromInterval = (min:number, max:number) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  useMemo(() => {
    const dummyArr: ImageObj[] = [];
    for (let i = 0; i < 10; i++) {
      const newId = i;
      const imageNo:number = randomIntFromInterval(1, 5);
      const leafImage:string = leafMap[imageNo];
      dummyArr.push({
        id: newId,
        image: leafImage
      })
    }
    setParticleArr([...dummyArr])
  }, [])


  const renderParticles = particleArr.map((particle) => {
    return (
      <img src={particle.image} key={particle.id} alt={`leaf_${particle.id}`} />
    )
  })


  return (
    <section id="particle-container"> 
      {renderParticles}
    </section>
  )
}