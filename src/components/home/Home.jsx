import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../card/Card';
import animate from '../../modules/planetsAnimations';
import svgsImport from '../../modules/svgs';
import planetsInfo from '../../modules/planetsInfo';
import './home.scss';

// * Imports the svgs separately because its easy the get the planets and its respective rings this way
const { sun, mercury, venus, earth, mars, jupiter, saturn, saturnRing, uranus, uranusRing, neptune } = svgsImport;
const planetsSvgs = [mercury, venus, earth, mars, jupiter, { planet: saturn, class: 'saturn-ring', ring: saturnRing }, { planet: uranus, class: 'uranus-ring', ring: uranusRing }, neptune];

function Home() {
    let [planetInteraction, setplanetInteraction] = useState({ show: false, info: { name: 'a', text: ['a'] } });

    // * Call the animation of the planets after the component is mount, if not it can't get the paths
    useEffect(() => animate(), []);

    // * Sets which planet info it should display depending on which planet the user select, if no planet its selected set to not show the card
    function handlePlanetClick(planetClicked) {
        switch (planetClicked) {
            case 'planet1': setplanetInteraction({ show: true, info: planetsInfo.mercury }); break;
            case 'planet2': setplanetInteraction({ show: true, info: planetsInfo.venus }); break;
            case 'planet3': setplanetInteraction({ show: true, info: planetsInfo.earth }); break;
            case 'planet4': setplanetInteraction({ show: true, info: planetsInfo.mars }); break;
            case 'planet5': setplanetInteraction({ show: true, info: planetsInfo.jupiter }); break;
            case 'planet6': setplanetInteraction({ show: true, info: planetsInfo.saturn }); break;
            case 'planet7': setplanetInteraction({ show: true, info: planetsInfo.uranus }); break;
            case 'planet8': setplanetInteraction({ show: true, info: planetsInfo.neptune }); break;
            default: setplanetInteraction((prevValues) => { return { show: false, info: prevValues.info } }); break;
        }
    }

    return <>
        <Helmet><title>Solar System</title></Helmet>
        <section className='home'>
            <div className='solar-system'>
                <img className="sun" src={sun} alt="sun" />

                {/* The class for the paths is for the animation */}
                {/* Change this for a ref, and pass that ref when the animation is called */}
                <svg className='orbits' width="1440" height="600" viewBox="0 0 1440 600" fill="none">
                    <path className='path1' d="M720 359.5C758.609 359.5 793.54 352.848 818.799 342.113C831.43 336.745 841.619 330.365 848.644 323.307C855.666 316.251 859.5 308.545 859.5 300.5C859.5 292.455 855.666 284.749 848.644 277.693C841.619 270.635 831.43 264.255 818.799 258.887C793.54 248.152 758.609 241.5 720 241.5C681.391 241.5 646.46 248.152 621.201 258.887C608.57 264.255 598.381 270.635 591.356 277.693C584.334 284.749 580.5 292.455 580.5 300.5C580.5 308.545 584.334 316.251 591.356 323.307C598.381 330.365 608.57 336.745 621.201 342.113C646.46 352.848 681.391 359.5 720 359.5Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path2' d="M720 213.5C662.06 213.5 609.628 223.286 571.7 239.09C552.735 246.992 537.42 256.389 526.854 266.797C516.289 277.204 510.5 288.593 510.5 300.5C510.5 312.407 516.289 323.796 526.854 334.203C537.42 344.612 552.735 354.008 571.7 361.91C609.628 377.714 662.06 387.5 720 387.5C777.94 387.5 830.372 377.714 868.3 361.91C887.265 354.008 902.58 344.612 913.146 334.203C923.711 323.796 929.5 312.407 929.5 300.5C929.5 288.593 923.711 277.204 913.146 266.797C902.58 256.389 887.265 246.992 868.3 239.09C830.372 223.286 777.94 213.5 720 213.5Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path3' d="M439.5 300C439.5 315.98 447.276 331.249 461.433 345.185C475.592 359.124 496.106 371.699 521.495 382.27C572.272 403.412 642.453 416.5 720 416.5C797.547 416.5 867.728 403.412 918.505 382.27C943.894 371.699 964.408 359.123 978.567 345.185C992.724 331.249 1000.5 315.98 1000.5 300C1000.5 284.02 992.724 268.751 978.567 254.815C964.408 240.877 943.894 228.301 918.505 217.73C867.728 196.588 797.547 183.5 720 183.5C642.453 183.5 572.272 196.588 521.495 217.73C496.106 228.302 475.592 240.877 461.433 254.815C447.276 268.751 439.5 284.02 439.5 300Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path4' d="M1070.5 300.5C1070.5 280.446 1060.76 261.297 1043.07 243.831C1025.36 226.364 999.725 210.611 968.002 197.37C904.558 170.89 816.876 154.5 720 154.5C623.124 154.5 535.442 170.89 471.998 197.37C440.275 210.611 414.636 226.364 396.935 243.831C379.235 261.297 369.5 280.446 369.5 300.5C369.5 320.554 379.235 339.703 396.935 357.169C414.636 374.636 440.275 390.389 471.998 403.63C535.442 430.11 623.124 446.5 720 446.5C816.876 446.5 904.558 430.11 968.002 403.63C999.725 390.389 1025.36 374.636 1043.07 357.169C1060.76 339.703 1070.5 320.554 1070.5 300.5Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path5' d="M720 499.5C852.499 499.5 972.431 477.122 1059.22 440.96C1102.61 422.878 1137.7 401.361 1161.93 377.493C1186.16 353.627 1199.5 327.44 1199.5 300C1199.5 272.56 1186.16 246.374 1161.93 222.507C1137.7 198.639 1102.61 177.122 1059.22 159.04C972.431 122.878 852.499 100.5 720 100.5C587.501 100.5 467.569 122.878 380.781 159.04C337.386 177.122 302.3 198.639 278.072 222.507C253.845 246.373 240.5 272.56 240.5 300C240.5 327.44 253.845 353.627 278.072 377.493C302.3 401.361 337.386 422.878 380.781 440.96C467.569 477.122 587.501 499.5 720 499.5Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path6' d="M160.5 300.5C160.5 332.566 176.083 363.159 204.359 391.033C232.636 418.909 273.579 444.035 324.213 465.148C425.478 507.372 565.41 533.5 720 533.5C874.59 533.5 1014.52 507.372 1115.79 465.148C1166.42 444.035 1207.36 418.909 1235.64 391.033C1263.92 363.158 1279.5 332.566 1279.5 300.5C1279.5 268.434 1263.92 237.841 1235.64 209.967C1207.36 182.091 1166.42 156.965 1115.79 135.852C1014.52 93.6279 874.59 67.5 720 67.5C565.41 67.5 425.478 93.628 324.213 135.852C273.579 156.965 232.636 182.091 204.359 209.967C176.083 237.842 160.5 268.434 160.5 300.5Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path7' d="M1359.5 300C1359.5 263.309 1341.68 228.31 1309.35 196.428C1277.03 164.544 1230.23 135.808 1172.36 111.664C1056.61 63.3776 896.682 33.5 720 33.5C543.318 33.5 383.387 63.3776 267.644 111.664C209.772 135.808 162.971 164.544 130.645 196.428C98.322 228.31 80.5 263.309 80.5 300C80.5 336.691 98.322 371.69 130.645 403.572C162.971 435.456 209.772 464.192 267.644 488.336C383.387 536.622 543.318 566.5 720 566.5C896.682 566.5 1056.61 536.622 1172.36 488.336C1230.23 464.192 1277.03 435.456 1309.35 403.572C1341.68 371.69 1359.5 336.691 1359.5 300Z" stroke="#fcfefe" strokeOpacity="0.1" />
                    <path className='path8' d="M720 0.500031C521.227 0.50004 341.295 34.0713 211.075 88.3296C145.964 115.459 93.3055 147.751 56.932 183.583C20.5603 219.413 0.499985 258.753 0.499987 300C0.499989 341.247 20.5603 380.587 56.932 416.417C93.3055 452.249 145.964 484.541 211.075 511.671C341.295 565.929 521.227 599.5 720 599.5C918.773 599.5 1098.7 565.929 1228.92 511.671C1294.04 484.541 1346.69 452.249 1383.07 416.417C1419.44 380.587 1439.5 341.247 1439.5 300C1439.5 258.753 1419.44 219.413 1383.07 183.583C1346.69 147.751 1294.04 115.459 1228.92 88.3295C1098.7 34.0712 918.773 0.500023 720 0.500031Z" stroke="#fcfefe" strokeOpacity="0.1" />
                </svg>

                {/* It maps through the svg array and displays the planets */}
                {planetsSvgs.map((svg, index) => {
                    return (
                        // planetClicked.target.classList[1] = the identifier of which planet is clicked
                        <div key={index} className={`planet planet${index + 1}`} onClick={(planetClicked) => handlePlanetClick(planetClicked.target.classList[1])}>
                            {/* svg.planet is the image of the planet, if there is no img it means is a planet with a ring, in that case svg planet is an object
                            that contains the svg of the planet and the one of the ring */}
                            <img src={svg.planet ? svg.planet : svg} alt="planet" />
                            {/* in the planets 5 and 6 it adds the ring svg*/}
                            { (index === 5 || index === 6) && <img className={svg.class} src={svg.ring} alt="planet ring" />}
                        </div>
                    )
                })}
            </div>
        </section>
        <Card handlePlanetClick={() => { handlePlanetClick() }} planetInfo={planetInteraction} />
    </>
}

export default Home;