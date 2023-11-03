// Test import of a JavaScript module
import { example } from '@/js/example'
import { Application } from '@splinetool/runtime'

// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM

const canvas = document.getElementById('canvas3d')
const spline = new Application(canvas)
spline.load('https://prod.spline.design/MOvLGnBMiF8SQzcO/scene.splinecode')

// console.log(spline.getVariables())
const formbtn = document.getElementById('form')
const functionbtn = document.getElementById('function')
const sliderGroup = document.getElementById('slider-group')
const heightSlider = document.getElementById('height')
const widthSlider = document.getElementById('width')
const depthSlider = document.getElementById('depth')
const decor1 = document.getElementById('decor1')
const decor2 = document.getElementById('decor2')
const decor11 = document.getElementById('decor11')
const decor12 = document.getElementById('decor12')
const sectioinGroup = document.getElementById('section-group')
const arrowleft = document.getElementById('arrow-left')
const arrowright = document.getElementById('arrow-right')
const sectionNum = document.getElementById('section-num')
const section1 = document.getElementById('section1')
const section2 = document.getElementById('section2')
const section3 = document.getElementById('section3')
const type11 = document.getElementById('type11')
const type12 = document.getElementById('type12')
const type13 = document.getElementById('type13')

const type21 = document.getElementById('type21')
const type22 = document.getElementById('type22')
const type23 = document.getElementById('type23')
const type31 = document.getElementById('type31')
const type32 = document.getElementById('type32')
const type33 = document.getElementById('type33')

let sectionNumber = 1

heightSlider.addEventListener('change', function () {
  spline.setVariable('height_j79h1b3', heightSlider.value), false
})

widthSlider.addEventListener(
  'change',
  function () {
    spline.setVariable('width_j79h1b3', widthSlider.value)
  },
  false
)
depthSlider.addEventListener(
  'change',
  function () {
    spline.setVariable('depth_j79h1b3', depthSlider.value)
  },
  false
)

decor1.addEventListener('click', function () {
  decor1.classList.add('shown')
  decor2.classList.remove('shown')
  spline.setVariable('decor_cladding_j79h1b3', 1)
})

decor2.addEventListener('click', function () {
  decor2.classList.add('shown')
  decor1.classList.remove('shown')
  spline.setVariable('decor_cladding_j79h1b3', 2)
})

decor11.addEventListener('click', function () {
  decor11.classList.add('shown')
  decor12.classList.remove('shown')
  spline.setVariable('decor_fill_j79h1b3', 1)
})

decor12.addEventListener('click', function () {
  decor12.classList.add('shown')
  decor11.classList.remove('shown')
  spline.setVariable('decor_fill_j79h1b3', 2)
})
formbtn.addEventListener('click', function () {
  formbtn.classList.add('shown')
  functionbtn.classList.remove('shown')
  sliderGroup.classList.remove('hidden')
  sectioinGroup.classList.add('hidden')
})
functionbtn.addEventListener('click', function () {
  formbtn.classList.remove('shown')
  functionbtn.classList.add('shown')
  sliderGroup.classList.add('hidden')
  sectioinGroup.classList.remove('hidden')
})

arrowleft.addEventListener('click', function () {
  if (sectionNumber > 1) sectionNumber--
  showSection(sectionNumber)
})
arrowright.addEventListener('click', function () {
  if (sectionNumber < 3) sectionNumber++
  showSection(sectionNumber)
})

function showSection(num) {
  sectionNum.innerHTML = 'Section ' + sectionNumber + ' of 3'
  if (num === 1) {
    section1.classList.add('shown')
    section2.classList.remove('shown')
    section3.classList.remove('shown')
  }
  if (num === 2) {
    section1.classList.remove('shown')
    section2.classList.add('shown')
    section3.classList.remove('shown')
  }
  if (num === 3) {
    section1.classList.remove('shown')
    section2.classList.remove('shown')
    section3.classList.add('shown')
  }
}

type11.addEventListener('click', function () {
  type11.classList.add('selected')
  type12.classList.remove('selected')
  type13.classList.remove('selected')
  spline.setVariable('section1_j79h1b3', 1)
})

type12.addEventListener('click', function () {
  type11.classList.remove('selected')
  type12.classList.add('selected')
  type13.classList.remove('selected')
  spline.setVariable('section1_j79h1b3', 2)
})

type13.addEventListener('click', function () {
  type11.classList.remove('selected')
  type12.classList.remove('selected')
  type13.classList.add('selected')
  spline.setVariable('section1_j79h1b3', 3)
})

type21.addEventListener('click', function () {
  type21.classList.add('selected')
  type22.classList.remove('selected')
  type23.classList.remove('selected')
  spline.setVariable('section2_j79h1b3', 1)
})

type22.addEventListener('click', function () {
  type21.classList.remove('selected')
  type22.classList.add('selected')
  type23.classList.remove('selected')
  spline.setVariable('section2_j79h1b3', 2)
})

type23.addEventListener('click', function () {
  type21.classList.remove('selected')
  type22.classList.remove('selected')
  type23.classList.add('selected')
  spline.setVariable('section2_j79h1b3', 3)
})

type31.addEventListener('click', function () {
  type31.classList.add('selected')
  type32.classList.remove('selected')
  type33.classList.remove('selected')
  spline.setVariable('section3_j79h1b3', 1)
})

type32.addEventListener('click', function () {
  type31.classList.remove('selected')
  type32.classList.add('selected')
  type33.classList.remove('selected')
  spline.setVariable('section3_j79h1b3', 2)
})

type33.addEventListener('click', function () {
  type31.classList.remove('selected')
  type32.classList.remove('selected')
  type33.classList.add('selected')
  spline.setVariable('section3_j79h1b3', 3)
})
