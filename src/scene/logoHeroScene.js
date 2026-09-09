import {
  ArcRotateCamera,
  Color3,
  Color4,
  DefaultRenderingPipeline,
  DepthOfFieldEffectBlurLevel,
  DirectionalLight,
  Engine,
  GlowLayer,
  HemisphericLight,
  Mesh,
  MeshBuilder,
  PBRMaterial,
  PointLight,
  Scene,
  StandardMaterial,
  TransformNode,
  Vector3,
  VertexBuffer,
  VertexData,
} from '@babylonjs/core'

const CYCLE = 16
const BLUE = Color3.FromHexString('#47bfff')
const PURPLE = Color3.FromHexString('#7e14ff')
const WHITE = Color3.FromHexString('#f4f8ff')

function smoothstep(t) {
  const x = Math.min(1, Math.max(0, t))
  return x * x * (3 - 2 * x)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function hash(i) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

function sampleMeshPoints(mesh, count) {
  mesh.computeWorldMatrix(true)
  const world = mesh.getWorldMatrix()
  const positions = mesh.getVerticesData(VertexBuffer.PositionKind)
  const indices = mesh.getIndices()
  const points = []

  if (!positions || !indices || indices.length < 3) return points

  const triCount = Math.floor(indices.length / 3)

  for (let i = 0; i < count; i += 1) {
    const tri = Math.floor(hash(i + 3.1) * triCount) * 3
    const ia = indices[tri] * 3
    const ib = indices[tri + 1] * 3
    const ic = indices[tri + 2] * 3

    let u = hash(i + 11.2)
    let v = hash(i + 19.8)
    if (u + v > 1) {
      u = 1 - u
      v = 1 - v
    }
    const w = 1 - u - v

    const local = new Vector3(
      positions[ia] * w + positions[ib] * u + positions[ic] * v,
      positions[ia + 1] * w + positions[ib + 1] * u + positions[ic + 1] * v,
      positions[ia + 2] * w + positions[ib + 2] * u + positions[ic + 2] * v,
    )

    points.push(Vector3.TransformCoordinates(local, world))
  }

  return points
}

function makeGlass(name, scene, tint, alpha = 0.42) {
  const material = new PBRMaterial(name, scene)
  material.albedoColor = tint
  material.metallic = 0.22
  material.roughness = 0.06
  material.indexOfRefraction = 1.52
  material.environmentIntensity = 1.35
  material.alpha = alpha
  material.transparencyMode = PBRMaterial.PBRMATERIAL_ALPHABLEND
  material.backFaceCulling = false
  material.subSurface.isRefractionEnabled = true
  material.subSurface.refractionIntensity = 0.85
  material.subSurface.tintColor = tint
  material.emissiveColor = tint.scale(0.18)
  return material
}

function makeMetal(name, scene) {
  const material = new PBRMaterial(name, scene)
  material.albedoColor = Color3.FromHexString('#d7e7ff')
  material.metallic = 1
  material.roughness = 0.12
  material.environmentIntensity = 1.5
  material.emissiveColor = Color3.FromHexString('#1a4d88').scale(0.22)
  return material
}

function createEmblem(scene) {
  const root = new TransformNode('emblem', scene)
  const glass = makeGlass('glass', scene, Color3.FromHexString('#dbe9ff'), 0.38)
  const metal = makeMetal('metal', scene)
  const coreGlass = makeGlass('coreGlass', scene, Color3.FromHexString('#9fd6ff'), 0.55)

  const plate = MeshBuilder.CreateCylinder(
    'plate',
    { diameter: 3.35, height: 0.16, tessellation: 6 },
    scene,
  )
  plate.rotation.x = Math.PI / 2
  plate.rotation.z = Math.PI / 6
  plate.material = glass
  plate.parent = root

  const disc = MeshBuilder.CreateCylinder(
    'disc',
    { diameter: 2.28, height: 0.1, tessellation: 64 },
    scene,
  )
  disc.rotation.x = Math.PI / 2
  disc.position.z = 0.07
  disc.material = coreGlass
  disc.parent = root

  const ring = MeshBuilder.CreateTorus(
    'ring',
    { diameter: 3.52, thickness: 0.07, tessellation: 96 },
    scene,
  )
  ring.rotation.x = Math.PI / 2
  ring.material = metal
  ring.parent = root

  const innerRing = MeshBuilder.CreateTorus(
    'innerRing',
    { diameter: 2.42, thickness: 0.035, tessellation: 80 },
    scene,
  )
  innerRing.rotation.x = Math.PI / 2
  innerRing.position.z = 0.12
  innerRing.material = metal
  innerRing.parent = root

  const stem = MeshBuilder.CreateBox('stem', { width: 0.34, height: 1.58, depth: 0.42 }, scene)
  const top = MeshBuilder.CreateBox('top', { width: 1.18, height: 0.24, depth: 0.42 }, scene)
  const bottom = MeshBuilder.CreateBox('bottom', { width: 1.18, height: 0.24, depth: 0.42 }, scene)
  top.position.y = 0.9
  bottom.position.y = -0.9
  ;[stem, top, bottom].forEach((mesh) => {
    mesh.position.z = 0.28
    mesh.material = metal
    mesh.parent = root
  })

  return {
    root,
    meshes: [plate, disc, ring, innerRing, stem, top, bottom],
  }
}

function cloudPoint(i, count, time) {
  const kind = i % 5
  const t = time * 0.42 + i * 0.017
  const spin = t + hash(i) * Math.PI * 2

  if (kind === 0) {
    const r = 2.1 + hash(i + 1) * 1.4
    return new Vector3(Math.cos(spin) * r, Math.sin(spin * 0.65) * 0.85, Math.sin(spin) * r)
  }
  if (kind === 1) {
    const r = 1.55 + (i % 9) * 0.12
    return new Vector3(Math.cos(spin) * r, Math.sin(spin) * r * 0.2, Math.sin(spin) * r)
  }
  if (kind === 2) {
    const r = 1.2 + hash(i + 4) * 0.8
    return new Vector3(Math.sin(spin) * r, Math.cos(spin * 1.2) * r, Math.cos(spin) * 0.7)
  }
  if (kind === 3) {
    const stream = ((i / count) * 6 - 3) + Math.sin(t * 1.4) * 0.2
    return new Vector3(
      Math.sin(spin * 2.2) * 0.35,
      stream,
      Math.cos(spin * 2.2) * 0.35,
    )
  }

  const r = 2.8 + hash(i + 8) * 0.9
  return new Vector3(
    Math.cos(spin * 0.7) * r * 0.7,
    Math.sin(t + i) * 1.15,
    Math.sin(spin * 0.7) * r * 0.7,
  )
}

function timeline(seconds) {
  const t = seconds % CYCLE
  if (t < 2.4) {
    return { phase: 'hold', mesh: 1, dust: 0.12, explode: 0, glow: 0.85 }
  }
  if (t < 5.6) {
    const u = smoothstep((t - 2.4) / 3.2)
    return { phase: 'dissolve', mesh: 1 - u, dust: 0.12 + u * 0.88, explode: u, glow: 1 }
  }
  if (t < 9.8) {
    const u = (t - 5.6) / 4.2
    return { phase: 'cloud', mesh: 0, dust: 1, explode: 1, glow: 1.15, swirl: u }
  }
  if (t < 13.4) {
    const u = smoothstep((t - 9.8) / 3.6)
    return { phase: 'reform', mesh: Math.max(0, u * 1.35 - 0.35), dust: 1 - u * 0.82, explode: 1 - u, glow: 1.1 + u * 0.45 }
  }
  const u = smoothstep((t - 13.4) / 2.6)
  return { phase: 'holdBright', mesh: 1, dust: 0.12, explode: 0, glow: 1.35 - u * 0.2 }
}

function createDustMesh(scene, count) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 4)
  const mesh = new Mesh('dust', scene)
  const data = new VertexData()
  data.positions = positions
  data.colors = colors
  data.applyToMesh(mesh, true)

  const material = new StandardMaterial('dustMat', scene)
  material.disableLighting = true
  material.emissiveColor = WHITE
  material.pointsCloud = true
  material.pointSize = 2.1
  material.alpha = 0.95
  material.transparencyMode = StandardMaterial.MATERIAL_ALPHABLEND
  mesh.material = material
  mesh.hasVertexAlpha = true
  mesh.isPickable = false
  mesh.alwaysSelectAsActiveMesh = true

  return { mesh, positions, colors }
}

export function createLogoHeroScene(canvas) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const mobile = window.innerWidth < 768
  const dustCount = reduced ? 900 : mobile ? 1800 : 4200
  const atomCount = reduced ? 18 : mobile ? 28 : 64

  const engine = new Engine(canvas, true, {
    antialias: true,
    adaptToDeviceRatio: true,
    preserveDrawingBuffer: false,
    stencil: false,
  })
  if (window.devicePixelRatio > 1.5) {
    engine.setHardwareScalingLevel(0.85)
  }

  const scene = new Scene(engine)
  scene.clearColor = new Color4(0.91, 0.95, 0.99, 1)
  scene.fogMode = Scene.FOGMODE_EXP2
  scene.fogDensity = 0.018
  scene.fogColor = Color3.FromHexString('#e7f1fb')
  scene.imageProcessingConfiguration.toneMappingEnabled = true
  scene.imageProcessingConfiguration.exposure = 1.12
  scene.imageProcessingConfiguration.contrast = 1.08

  const camera = new ArcRotateCamera(
    'camera',
    -Math.PI / 2,
    1.22,
    mobile ? 8.2 : 7.1,
    Vector3.Zero(),
    scene,
  )
  camera.lowerRadiusLimit = 5.6
  camera.upperRadiusLimit = 9.5
  camera.fov = 0.72
  camera.minZ = 0.1
  camera.attachControl(canvas, false)
  camera.inputs.clear()
  camera.pinchPrecision = 0
  camera.wheelPrecision = 10000

  const hemi = new HemisphericLight('hemi', new Vector3(0.2, 1, 0.35), scene)
  hemi.intensity = 0.7
  hemi.diffuse = Color3.FromHexString('#f7fbff')
  hemi.groundColor = Color3.FromHexString('#9eb6d4')

  const key = new DirectionalLight('key', new Vector3(-0.35, -0.55, -0.7), scene)
  key.intensity = 1.35
  key.diffuse = Color3.FromHexString('#ffffff')

  const fill = new PointLight('fill', new Vector3(3.2, 1.4, 4.2), scene)
  fill.diffuse = BLUE
  fill.intensity = 28

  const rim = new PointLight('rim', new Vector3(-3.4, 0.8, -2.8), scene)
  rim.diffuse = PURPLE
  rim.intensity = 22

  scene.createDefaultEnvironment({
    createGround: false,
    createSkybox: true,
    skyboxSize: 80,
    skyboxColor: Color3.FromHexString('#eef5fc'),
    enableGroundShadow: false,
  })

  const emblem = createEmblem(scene)
  const restPoints = []
  emblem.meshes.forEach((mesh, index) => {
    const share = Math.floor(dustCount / emblem.meshes.length)
    const extra = index === 0 ? dustCount - share * emblem.meshes.length : 0
    restPoints.push(...sampleMeshPoints(mesh, share + extra))
  })

  const { mesh: dustMesh, positions, colors } = createDustMesh(scene, restPoints.length)
  const rest = restPoints.map((p) => p.clone())
  const seeds = rest.map((_, i) => ({
    jitter: hash(i + 2.2),
    hue: hash(i + 5.7),
  }))

  const atoms = []
  const atomMat = new StandardMaterial('atomMat', scene)
  atomMat.disableLighting = true
  atomMat.emissiveColor = BLUE
  atomMat.alpha = 0.9

  for (let i = 0; i < atomCount; i += 1) {
    const atom = MeshBuilder.CreateSphere(
      `atom${i}`,
      { diameter: 0.055 + (i % 5) * 0.012, segments: 8 },
      scene,
    )
    atom.material = atomMat
    atom.isPickable = false
    atoms.push(atom)
  }

  const bondLines = Array.from({ length: atomCount }, () => [Vector3.Zero(), Vector3.Zero()])
  const bonds = MeshBuilder.CreateLineSystem('bonds', { lines: bondLines, updatable: true }, scene)
  bonds.color = new Color4(0.28, 0.75, 1, 0.35)
  bonds.isPickable = false

  const glow = new GlowLayer('glow', scene, { blurKernelSize: 32 })
  glow.intensity = 0.72
  glow.referenceMeshToUseItsOwnMaterial(dustMesh)

  if (!mobile) {
    const pipeline = new DefaultRenderingPipeline('studio', true, scene, [camera])
    pipeline.fxaaEnabled = true
    pipeline.bloomEnabled = true
    pipeline.bloomThreshold = 0.62
    pipeline.bloomWeight = 0.42
    pipeline.bloomKernel = 48
    pipeline.depthOfFieldEnabled = true
    pipeline.depthOfFieldBlurLevel = DepthOfFieldEffectBlurLevel.Low
    pipeline.depthOfField.focalLength = 180
    pipeline.depthOfField.fStop = 1.6
    pipeline.depthOfField.focusDistance = camera.radius * 1000
    pipeline.imageProcessing.vignetteEnabled = true
    pipeline.imageProcessing.vignetteWeight = 1.4
    pipeline.imageProcessing.vignetteColor = new Color4(0.78, 0.88, 0.98, 0)
    scene.metadata = { pipeline }
  }

  const start = performance.now()

  scene.registerBeforeRender(() => {
    const elapsed = (performance.now() - start) / 1000
    const state = reduced
      ? { phase: 'hold', mesh: 1, dust: 0.08, explode: 0, glow: 0.8 }
      : timeline(elapsed)

    const zoom = mobile ? 8.2 : 7.1
    camera.alpha = -Math.PI / 2 + Math.sin(elapsed * 0.18) * 0.28
    camera.beta = 1.18 + Math.sin(elapsed * 0.13) * 0.08
    camera.radius = zoom + Math.sin(elapsed * 0.09) * 0.35

    emblem.root.rotation.y = Math.sin(elapsed * 0.2) * 0.12
    emblem.meshes.forEach((mesh) => {
      if (mesh.material) {
        mesh.material.alpha = mesh.name.includes('plate') || mesh.name.includes('disc')
          ? 0.16 + state.mesh * 0.28
          : Math.max(0.04, state.mesh)
        mesh.material.emissiveColor = Color3.Lerp(
          Color3.FromHexString('#0b2a4d'),
          Color3.FromHexString('#9fd6ff'),
          state.mesh * (state.phase === 'holdBright' ? 1.15 : 0.85),
        )
      }
    })

    glow.intensity = 0.45 + state.glow * 0.55
    fill.intensity = 18 + state.glow * 16
    rim.intensity = 14 + state.glow * 14

    const pipeline = scene.metadata?.pipeline
    if (pipeline) {
      pipeline.bloomWeight = 0.28 + state.glow * 0.28
      pipeline.depthOfField.focusDistance = camera.radius * 1000
    }

    for (let i = 0; i < rest.length; i += 1) {
      const origin = rest[i]
      const cloud = cloudPoint(i, rest.length, elapsed)
      const burst = 1 + seeds[i].jitter * 0.8
      const mixed = Vector3.Lerp(origin, cloud.scale(burst), state.explode)
      mixed.x += Math.sin(elapsed * 1.3 + i) * 0.04 * state.explode
      mixed.y += Math.cos(elapsed * 1.1 + i * 0.4) * 0.05 * state.explode

      positions[i * 3] = mixed.x
      positions[i * 3 + 1] = mixed.y
      positions[i * 3 + 2] = mixed.z

      const energy = state.dust
      const cool = seeds[i].hue > 0.55
      colors[i * 4] = cool ? lerp(0.72, 0.28, energy) : lerp(0.9, 0.62, energy)
      colors[i * 4 + 1] = cool ? lerp(0.84, 0.55, energy) : lerp(0.9, 0.22, energy)
      colors[i * 4 + 2] = 1
      colors[i * 4 + 3] = 0.15 + energy * 0.85
    }

    dustMesh.updateVerticesData(VertexBuffer.PositionKind, positions)
    dustMesh.updateVerticesData(VertexBuffer.ColorKind, colors)
    dustMesh.material.alpha = 0.25 + state.dust * 0.75

    const atomPositions = []
    for (let i = 0; i < atoms.length; i += 1) {
      const idx = Math.floor((i / atoms.length) * rest.length)
      const pos = new Vector3(
        positions[idx * 3],
        positions[idx * 3 + 1],
        positions[idx * 3 + 2],
      )
      atoms[i].position.copyFrom(pos)
      atoms[i].scaling.setAll(0.65 + state.dust * 0.9)
      atomPositions.push(pos)
    }

    for (let i = 0; i < atoms.length; i += 1) {
      let nearest = (i + 1) % atoms.length
      let dist = Vector3.Distance(atomPositions[i], atomPositions[nearest])
      for (let j = 0; j < atoms.length; j += 1) {
        if (j === i) continue
        const d = Vector3.Distance(atomPositions[i], atomPositions[j])
        if (d < dist) {
          dist = d
          nearest = j
        }
      }
      const visible = state.dust > 0.35 && dist < 1.35
      bondLines[i][0].copyFrom(atomPositions[i])
      bondLines[i][1].copyFrom(visible ? atomPositions[nearest] : atomPositions[i])
    }
    MeshBuilder.CreateLineSystem('bonds', { lines: bondLines, instance: bonds })
    bonds.alpha = 0.15 + state.dust * 0.45
  })

  engine.runRenderLoop(() => {
    scene.render()
  })

  const onResize = () => engine.resize()
  window.addEventListener('resize', onResize)

  const observer = typeof ResizeObserver === 'undefined'
    ? null
    : new ResizeObserver(() => engine.resize())
  observer?.observe(canvas)

  return () => {
    window.removeEventListener('resize', onResize)
    observer?.disconnect()
    engine.stopRenderLoop()
    scene.dispose()
    engine.dispose()
  }
}
