import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer()

console.log(scene)
console.log(camera)
console.log(renderer)

renderer.setSize(innerWidth, innerHeight)
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
console.log(boxGeometry)

const material = new THREE.MeshBasicMaterial({ color: 0xff4500 })
console.log(material)

const mesh = new THREE.Mesh(boxGeometry, material)
console.log(mesh)
scene.add(mesh)

renderer.render(scene, camera)