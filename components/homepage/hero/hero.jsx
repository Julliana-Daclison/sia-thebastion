import { App,
         HeroImg,
         HeroText } from "./hero.styled";


const Hero = () =>{

    return (
        <App>
                <picture>
                    <source media="(min-width:768px)" srcSet="/vectors/homepage/hero-tablet.png"/>
                    <source media="(min-width:1440px)" srcSet="/vectors/homepage/hero-desktop.png"/>
                    <HeroImg src="/vectors/homepage/hero-mobile.png" alt="" style="width: auto;"/>
                </picture>
                    <HeroText>
                        <span>Where our pen</span>
                        <span> leads us.</span>
                    </HeroText>
        </App>
    );
}


export default Hero;