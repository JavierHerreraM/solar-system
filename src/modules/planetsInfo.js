import svgsImport from './svgs';

// * Imports the svgs
const { sun, mercury, venus, earth, mars, jupiter, saturn, saturnRing, uranus, uranusRing, neptune } = svgsImport;

const planetsInfo = {
    sun: sun,
    // * Each planet has a name, text, characteristics(usually 4-5), the svg and a theme color
    mercury: {
        name: 'mercury',
        text: ['Mercury is the closest planet to the sun and the smallest in the solar system. It is only about as wide as the Atlantic ocean and eighteen Mercury would fit inside the Earth. It is named for the ancient roman god of trade and profit.', "It's thin atmosphere means meteors don't burn up, so Mercury is covered in craters just like our Moon.", "Standing on Mercury's surface at its closest point to the Sun, it would appear more than three times larger than it does on Earth. Sunlight in mercury can be as much as 11 times brighter than it is on Earth.", "The discoverer of Mercury is unknown, the earliest know recorded observations of Mercury come from the 14th century BC."],
        characteristics: ["15329.1km (0.38 x Earth)", "3.3010x10^23kg (0.05 x Earth)", " 87.9 days", "1408.5 hours (58.6 Earth days)", "-173/427 °C (min/max)"],
        svg: mercury,
        color:'#C6AD93'
    }, 
    venus: {
        name: 'venus',
        text: ["Venus is the second brightest object in our night sky after the moon, though named for the goddess of love and beauty, the planet is extremely hostile and uninviting.", "Its cratered and volcanic surface is obscured by clouds of sulfuric acid. The atmosphere consists mainly of carbon dioxide which has created a runaway greenhouse effect.", "Venus rotates in the opposite direction of the other planets, so the sun rises in the west and sets in the east. A day on Venus is longer than its year.", "The soviet space probe Venera 3 crash-landed on Venus on march 1, 1966. It was the first man-made object to enter the atmosphere and reach the surface of another planet."],
        characteristics: ["38024.6km (0.94 x Earth)", "4.8673x10^24kg (0.81 x Earth)", "224.7 days", "5832.4 hours (243 Earth days)", "462 °C"],
        svg: venus,
        color:'#F4CA53'
    }, 
    earth: {
        name: 'earth',
        text: ["Earth is the fifth largest planet of the solar system, it was formed about 4.54 billion years ago. Its location in the Sun's habitable zone made life possible to form between 3.8 and 4 billion years ago.", "Earth has a solid iron core, a molten outer core that generates the planet's magnetic field, and a mantle that drives plate tectonics. Oceans cover 70% of Earth's surface.", "Earth's axis of rotation is tilted 23.4°, this produces seasonal variations. The Moon is Earth's only natural satellite and its gravitational interaction with Earth causes ocean tides, stabilizes the orientation of Earth's rotational axis and gradually slows Earth's rotational rate.", "The International Space Station began construction in 1998 and is currently the largest artificial body in orbit. It serves as a microgravity laboratory in which crew members conduct experiments in biology, physics, astronomy and other fields."],
        characteristics: ["40030.2km", "5.9722x10^24kg", "365.2 days", "23.93 hours", "-88/58 °C (min/max)"],
        svg: earth,
        color:'#62A8DD'
    }, 
    mars: {
        name: 'mars',
        text: ["Mars is named for the roman god of war, it has two moons, Phobos(fear) and Deimos(panic). In about 50 million years the larger moon Phobos will either smash into Mars or break up, creating a ring around it.", "The rocky surface of Mars is covered in soil tainted red by iron oxide. Strong winds kicks up dust into the thin atmosphere, causing Mars to appear mostly red.", "Surface features include polar ice caps, canyons, impact craters and deserts. Olympus Mons is the largest known volcano in the solar system, towers at a height of 25km. In 2015 NASA announced the presence of flowing salt water on Mars.", "SpaceX Mars program is a development program initiated by SpaceX in order to facilitate the eventual colonization of Mars, SpaceX aspiration goal has been to land the first uncrewed mission on Mars by 2024 and the first humans on Mars by 2026."],
        characteristics: ["21296.9km (0.53 x Earth)", "6.4169x10^23kg (0.10 x Earth)", "686.9 days (1.88 Earth years)", "24.6 hours", "-153/20 °C (min/max)"],
        svg: mars,
        color:'#B5331A'
    }, 
    jupiter: {
        name: 'jupiter',
        text: ["Jupiter is named for the king of the roman gods. It is the biggest planet in the solar system. As a gas giant planet it does not have a solid surface though it may have a solid core about the size of Earth.", "Jupiter has a very faint ring system that was discovered in 1979 by the Voyager 1 mission. There's a giant storm roughly as big as Earth raging in its atmosphere called the Great Red Spot.", " Jupiter has 50 know moons, the four largest moons, Io, Europa, Ganymede and Callisto were discovered by Galileo Galilei in 1610 and are called the Galilean Moons. Ganymede is bigger than Mercury, Io is the most volcanically active body in the solar system and Europa is believed to have a subsurface ocean.", "Since 1973 seven spacecrafts performed fly-bys of jupiter. In 2016 Juno mission arrived to Jupiter and it is studying it in detail from a polar orbit."],
        characteristics:["439263.8km (10.97 x Earth)", "1.43128x10^27kg (317.8 x Earth)", "4332.5 days (11.8 Earth years)", "9.9 hours", "-148 °C"],
        svg: jupiter,
        color:'#dba995'
    }, 
    saturn: {
        name: 'saturn',
        text: ["Saturn is a gas planet without a solid surface. Its named after the roman god of wealth. It is the only planet in the solar system that is less dense than water and could theoretically float.", "Saturn's spectacular ring system is made of billions of pieces of rock and ice ranging in size from a grain of sugar to a house. They were probably formed when moons and other objects were thorn apart by Saturn's gravity.", "The NASA mission Cassini-Huygens was launched in 1997 and reached Saturn on july 1, 2004. Six months later, the Hyugens probe separated from Cassini and reached Saturn's moon Titan on january 14, 2005. This was the first landing ever accomplished in the outer Solar System."],
        characteristics:["365882.4km (9.14 x Earth)", "5.6832x10^26kg (95.16 x Earth)", "10759.2 days (29.46 Earth years)", "10.6 hours", "-178 °C"],
        svg: saturn,
        ring: saturnRing,
        color:'#E5A642'

    }, 
    uranus: {
        name: 'uranus',
        text: ["Uranus was discovered by William Herschel in 1781. It is the only planet known to rotate on its side, possibly the result of a collision with a planet-sized body early in Uranus' history. The rotation is also retrograde, similar to Venus.", "Uranus is an ice giant, meaning at least 80% of the planet's mass is made up of a hot dense fluid of icy materials (water, methane and ammonia) enclosing a rocky core. It has 13 known rings and 27 known moons.", "Voyager 2 is currently the only spacecraft to have visited Uranus, having performed a fly-by in 1986. It studied the atmosphere, made investigations of the five largest moons and discovered ten new ones."],
        characteristics:["156354.1km (3.98 x Earth)", "8.6810x10^25kg (14.53 x Earth)", "30687.1 days (84.02 Earth years)", "17.2 hours", "-216 °C"],
        svg: uranus,
        ring: uranusRing,
        color:'#7FE2EF'
    }, 
    neptune: {
        name: 'neptune',
        characteristics:["154704.6km (3.86 x Earth)", "1.0241x10^26kg (17.14 x Earth)", "60190.03 days (164.8 Earth years)", "16.1 hours", "-214 °C"],
        text: ["Neptune is the first planet to be located through mathematical predictions rather than observations of the sky. It is named after the roman god of water and sea.", "In 1821 Alexis Bouvard hypothesized of its existence due to the irregular motion of Uranus. Between 1845-46 Urbain Le Verrier calculated Neptune's position and the planet was first observed on september 23, 1846 by Johann Galle within a degree of the prediction.", "Neptune is known to have 6 rings and 13 moons. It is the windiest planet on the solar system with clouds of methane moving across the atmosphere at speeds exceeding 2000km/h.", "In 1989 Voyager 2 became the first and so far only spacecraft to visit Neptune. During its fly-by the probe confirmed the existence of Neptune's rings and magnetic field and discovered six of its moons."],
        svg: neptune,
        color:'#6073C6'
    }, 
};

export default planetsInfo;