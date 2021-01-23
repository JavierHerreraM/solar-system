import React, { useEffect } from 'react';
import Card from '../card/Card';
import animate from '../../modules/planetsAnimations';
import svgsImport from '../../modules/svgs';
import './home.scss';

const { sun, mercury, venus, earth, mars, jupiter, saturn, saturnRing, uranus, uranusRing, neptune } = svgsImport;
const planetsSvgs = [mercury, venus, earth, mars, jupiter, { planet: saturn, class: 'saturn-ring', ring: saturnRing }, { planet: uranus, class: 'uranus-ring', ring: uranusRing }, neptune];

function Landing(props) {
    const { handlePlanetClick, planetHover } = props
    useEffect(() => animate(), []);

    const text = [<p key={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula diam. Vestibulum vitae ultricies orci. Aenean nisi orci, convallis interdum molestie ac, commodo et nisl. Ut vel augue fringilla, auctor felis ut, accumsan ante. Sed lectus est, mollis at sapien in, dictum volutpat diam.</p>,
    <p key={2}>Mauris lacinia lobortis eros at maximus. In maximus orci eget quam feugiat accumsan. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices arcu vel felis sodales, quis posuere felis ultrices. Duis lacinia leo id sapien vulputate interdum. Vestibulum venenatis, erat nec imperdiet scelerisque, ligula justo fringilla arcu, a cursus nunc lorem quis mi. Praesent iaculis tellus sem, eu rhoncus magna porta id.</p>,
    <p key={3}>Praesent a mollis diam, ac consectetur urna. Morbi tempor nisi eget risus cursus vehicula. Donec maximus nunc non lorem finibus aliquam.</p>];


    return (
        <>
            <div className='landing'>
                <div className='solar-system'>
                    <img className="sun" src={sun} alt="sun" />
                    <svg className="orbits" width="1440" height="600" viewBox="0 0 1440 600" fill="none">
                        <path className="path1"
                            d="M859.5 299.5C859.5 307.545 855.666 315.251 848.644 322.307C841.619 329.365 831.43 335.745 818.799 341.113C793.54 351.848 758.609 358.5 720 358.5C681.391 358.5 646.46 351.848 621.201 341.113C608.57 335.745 598.381 329.365 591.356 322.307C584.334 315.251 580.5 307.545 580.5 299.5C580.5 291.455 584.334 283.749 591.356 276.693C598.381 269.635 608.57 263.255 621.201 257.887C646.46 247.152 681.391 240.5 720 240.5C758.609 240.5 793.54 247.152 818.799 257.887C831.43 263.255 841.619 269.635 848.644 276.693C855.666 283.749 859.5 291.455 859.5 299.5Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path2"
                            d="M929.5 299.5C929.5 311.407 923.711 322.796 913.146 333.203C902.58 343.611 887.265 353.008 868.3 360.91C830.372 376.714 777.94 386.5 720 386.5C662.06 386.5 609.628 376.714 571.7 360.91C552.735 353.008 537.42 343.611 526.854 333.203C516.289 322.796 510.5 311.407 510.5 299.5C510.5 287.593 516.289 276.204 526.854 265.797C537.42 255.389 552.735 245.992 571.7 238.09C609.628 222.286 662.06 212.5 720 212.5C777.94 212.5 830.372 222.286 868.3 238.09C887.265 245.992 902.58 255.389 913.146 265.797C923.711 276.204 929.5 287.593 929.5 299.5Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path3"
                            d="M1000.5 300C1000.5 315.98 992.724 331.249 978.567 345.185C964.408 359.123 943.894 371.699 918.505 382.27C867.728 403.412 797.547 416.5 720 416.5C642.453 416.5 572.272 403.412 521.495 382.27C496.106 371.699 475.592 359.123 461.433 345.185C447.276 331.249 439.5 315.98 439.5 300C439.5 284.02 447.276 268.751 461.433 254.815C475.592 240.877 496.106 228.301 521.495 217.73C572.272 196.588 642.453 183.5 720 183.5C797.547 183.5 867.728 196.588 918.505 217.73C943.894 228.301 964.408 240.877 978.567 254.815C992.724 268.751 1000.5 284.02 1000.5 300Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path4"
                            d="M1070.5 299.5C1070.5 319.554 1060.76 338.703 1043.07 356.169C1025.36 373.636 999.725 389.389 968.002 402.63C904.558 429.11 816.876 445.5 720 445.5C623.124 445.5 535.442 429.11 471.998 402.63C440.275 389.389 414.636 373.636 396.935 356.169C379.235 338.703 369.5 319.554 369.5 299.5C369.5 279.446 379.235 260.297 396.935 242.831C414.636 225.364 440.275 209.611 471.998 196.37C535.442 169.89 623.124 153.5 720 153.5C816.876 153.5 904.558 169.89 968.002 196.37C999.725 209.611 1025.36 225.364 1043.07 242.831C1060.76 260.297 1070.5 279.446 1070.5 299.5Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path5"
                            d="M1199.5 300C1199.5 327.44 1186.16 353.627 1161.93 377.493C1137.7 401.361 1102.61 422.878 1059.22 440.96C972.431 477.122 852.499 499.5 720 499.5C587.501 499.5 467.569 477.122 380.781 440.96C337.386 422.878 302.3 401.361 278.072 377.493C253.845 353.627 240.5 327.44 240.5 300C240.5 272.56 253.845 246.373 278.072 222.507C302.3 198.639 337.386 177.122 380.781 159.04C467.569 122.878 587.501 100.5 720 100.5C852.499 100.5 972.431 122.878 1059.22 159.04C1102.61 177.122 1137.7 198.639 1161.93 222.507C1186.16 246.373 1199.5 272.56 1199.5 300Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path6"
                            d="M1279.5 299.5C1279.5 331.566 1263.92 362.159 1235.64 390.033C1207.36 417.909 1166.42 443.035 1115.79 464.148C1014.52 506.372 874.59 532.5 720 532.5C565.41 532.5 425.478 506.372 324.213 464.148C273.579 443.035 232.636 417.909 204.359 390.033C176.083 362.159 160.5 331.566 160.5 299.5C160.5 267.434 176.083 236.842 204.359 208.967C232.636 181.091 273.579 155.965 324.213 134.852C425.478 92.628 565.41 66.5 720 66.5C874.59 66.5 1014.52 92.628 1115.79 134.852C1166.42 155.965 1207.36 181.091 1235.64 208.967C1263.92 236.842 1279.5 267.434 1279.5 299.5Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path7"
                            d="M1359.5 300C1359.5 336.691 1341.68 371.69 1309.35 403.572C1277.03 435.456 1230.23 464.192 1172.36 488.336C1056.61 536.622 896.682 566.5 720 566.5C543.318 566.5 383.387 536.622 267.644 488.336C209.772 464.192 162.971 435.456 130.645 403.572C98.322 371.69 80.5 336.691 80.5 300C80.5 263.309 98.322 228.31 130.645 196.428C162.971 164.544 209.772 135.808 267.644 111.664C383.387 63.3776 543.318 33.5 720 33.5C896.682 33.5 1056.61 63.3776 1172.36 111.664C1230.23 135.808 1277.03 164.544 1309.35 196.428C1341.68 228.31 1359.5 263.309 1359.5 300Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                        <path className="path8"
                            d="M1439.5 300C1439.5 341.247 1419.44 380.587 1383.07 416.417C1346.69 452.249 1294.04 484.541 1228.92 511.671C1098.7 565.929 918.773 599.5 720 599.5C521.227 599.5 341.295 565.929 211.075 511.671C145.964 484.541 93.3055 452.249 56.9321 416.417C20.5604 380.587 0.5 341.247 0.5 300C0.5 258.753 20.5604 219.413 56.9321 183.583C93.3055 147.751 145.964 115.459 211.075 88.3295C341.295 34.0712 521.227 0.5 720 0.5C918.773 0.5 1098.7 34.0712 1228.92 88.3295C1294.04 115.459 1346.69 147.751 1383.07 183.583C1419.44 219.413 1439.5 258.753 1439.5 300Z"
                            stroke="#fcfefe" strokeOpacity="0.1" />
                    </svg>

                    {planetsSvgs.map((svg, index) => {
                        return (<div key={index} className={`planet planet${index + 1}`} onClick={(e) => handlePlanetClick(e.target.classList[1])}>
                            <img src={svg.planet ? svg.planet : svg} alt="planet" />
                            { (index === 5 || index === 6) && <img className={svg.class} src={svg.ring} alt="planet ring" />}
                        </div>)
                    })}
                </div>
            </div>
            <Card cardText={text} buttonLink='https://google.com' buttonText='default' handlePlanetClick={() => { handlePlanetClick() }} planetInfo={planetHover} />
        </>
    );
}

export default Landing;