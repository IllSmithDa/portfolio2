import "./Header.scss";
import headerImgUrl from '../../../../assets/images/forest_bridge_com.webp'
import headerMedium from '../../../../assets/images/forest_bridge_com_2000.webp';
import headerSmall from '../../../../assets/images/forest_bridge_com_1000.webp';
import Particles from "../../../../components/Particles/Particles";

//https://imagekit.io/blog/lazy-loading-images-complete-guide/
export default function Header() {
  return (
    <header className="header">
    <Particles />  
      {
      <img
        className='bg-img'
        src={headerImgUrl}
        srcSet={`
          ${headerSmall} 600w,
          ${headerMedium} 1200w,
          ${headerMedium} 2000w`}
        sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
        loading='lazy'
      />
      }
      <h1 className="header-font">Samuel Kim</h1>
      <h3>Full Stack Developer From SF Ca</h3>
      <a href="#tech-stack" className="left-on-scroll btn btn--white">Learn More</a>
      {
        <div className='bg-gradient'></div>
      }
    </header>
  );
}