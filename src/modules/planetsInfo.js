import svgsImport from './svgs';
const { sun, mercury, venus, earth, mars, jupiter, saturn, saturnRing, uranus, uranusRing, neptune } = svgsImport;

const planetsInfo = {
    sun: sun,
    mercury: {
        name: 'mercury',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: mercury,
        color:'#C6AD93'
    }, 
    venus: {
        name: 'venus',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: venus,
        color:'#F4CA53'
    }, 
    earth: {
        name: 'earth',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: earth,
        color:'#62A8DD'
    }, 
    mars: {
        name: 'mars',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: mars,
        color:'#B5331A'
    }, 
    jupiter: {
        name: 'jupiter',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: jupiter,
        color:'#dba995'
    }, 
    saturn: {
        name: 'saturn',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: saturn,
        ring: saturnRing,
        color:'#E5A642'

    }, 
    uranus: {
        name: 'uranus',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: uranus,
        ring: uranusRing,
        color:'#7FE2EF'
    }, 
    neptune: {
        name: 'neptune',
        text: ['text1', 'text2', 'text3', 'text4', 'text5'],
        svg: neptune,
        color:'#6073C6'
    }, 
}

export default planetsInfo;