import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Shield, Radio, Cpu, RotateCcw } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface Retro3DCharacterBackgroundProps {
  wireframeMode?: boolean;
}

export const Retro3DCharacterBackground: React.FC<Retro3DCharacterBackgroundProps> = ({
  wireframeMode = false
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [characterStatus, setCharacterStatus] = useState({
    mode: 'SYNAPSE_STANDBY',
    tracking: 'LOCKED',
    fps: 60,
    corePulse: 98
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    // Position camera to frame the 3D character heroically on the right on desktop, centered on mobile
    const isMobile = window.innerWidth < 1024;
    camera.position.set(isMobile ? 0 : 7, 2, 34);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 2. High-Contrast Monochrome Noir Lighting
    const ambientLight = new THREE.AmbientLight(0x222222, 1.2);
    scene.add(ambientLight);

    // Key Spotlight (crisp stark white)
    const keySpot = new THREE.SpotLight(0xffffff, 4.5);
    keySpot.position.set(15, 25, 20);
    keySpot.angle = Math.PI / 5;
    keySpot.penumbra = 0.6;
    scene.add(keySpot);

    // Dramatic Rim Light (pure white edge contour)
    const rimLight = new THREE.DirectionalLight(0xffffff, 3.8);
    rimLight.position.set(-18, 12, -15);
    scene.add(rimLight);

    // Bottom Subtle Reflector
    const floorBounce = new THREE.DirectionalLight(0x444444, 1.0);
    floorBounce.position.set(0, -15, 10);
    scene.add(floorBounce);

    // 3. Materials — Pure Black & White / Chrome
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8d8,
      metalness: 0.95,
      roughness: 0.18,
      wireframe: wireframeMode
    });

    const darkCarbonMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      metalness: 0.5,
      roughness: 0.75,
      wireframe: wireframeMode
    });

    const specularPlateMat = new THREE.MeshStandardMaterial({
      color: 0x8a8a8a,
      metalness: 0.85,
      roughness: 0.3,
      wireframe: wireframeMode
    });

    const glowingVisorMat = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });

    const glowingCoreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });

    const wireRingMat = new THREE.MeshBasicMaterial({
      color: 0x777777,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });

    // 4. Constructing 3D Cyber Character Model Hierarchy
    const characterRoot = new THREE.Group();
    // Shift slightly to right on large screens
    characterRoot.position.set(isMobile ? 0 : 8, -4, 0);
    scene.add(characterRoot);

    // TORSO & UPPER BODY GROUP
    const torsoGroup = new THREE.Group();
    characterRoot.add(torsoGroup);

    // Main Chest Chassis (Beveled Hexagonal / Angled Poly)
    const chestGeo = new THREE.CylinderGeometry(3.2, 2.4, 4.6, 6);
    const chestMesh = new THREE.Mesh(chestGeo, chromeMat);
    chestMesh.position.y = 7.5;
    chestMesh.scale.set(1.1, 1, 0.7);
    torsoGroup.add(chestMesh);

    // Chest Armor Facets
    const breastPlateGeo = new THREE.BoxGeometry(2.2, 2.0, 0.8);
    const leftBreast = new THREE.Mesh(breastPlateGeo, specularPlateMat);
    leftBreast.position.set(-1.2, 8.2, 1.5);
    leftBreast.rotation.set(0.1, -0.2, 0.05);
    torsoGroup.add(leftBreast);

    const rightBreast = new THREE.Mesh(breastPlateGeo, specularPlateMat);
    rightBreast.position.set(1.2, 8.2, 1.5);
    rightBreast.rotation.set(0.1, 0.2, -0.05);
    torsoGroup.add(rightBreast);

    // Central Glowing Reactor Core (Concentric Square/Octagon)
    const coreOuterGeo = new THREE.BoxGeometry(1.5, 1.5, 0.5);
    const coreOuter = new THREE.Mesh(coreOuterGeo, darkCarbonMat);
    coreOuter.position.set(0, 7.8, 1.6);
    torsoGroup.add(coreOuter);

    const coreLightGeo = new THREE.BoxGeometry(0.9, 0.9, 0.6);
    const coreLight = new THREE.Mesh(coreLightGeo, glowingCoreMat);
    coreLight.position.set(0, 7.8, 1.62);
    torsoGroup.add(coreLight);

    // Core Point Light (stark white illumination on chest)
    const corePointLight = new THREE.PointLight(0xffffff, 2.5, 8);
    corePointLight.position.set(0, 7.8, 2.5);
    torsoGroup.add(corePointLight);

    // Abdominal Hydraulic Cables & Segments
    for (let i = 0; i < 4; i++) {
      const segGeo = new THREE.CylinderGeometry(1.8 - i * 0.12, 1.9 - i * 0.12, 0.65, 8);
      const segMesh = new THREE.Mesh(segGeo, darkCarbonMat);
      segMesh.position.set(0, 4.8 - i * 0.75, 0);
      torsoGroup.add(segMesh);
    }

    // Spine Vertebrae on back
    for (let i = 0; i < 6; i++) {
      const vertGeo = new THREE.BoxGeometry(0.8, 0.5, 0.8);
      const vertMesh = new THREE.Mesh(vertGeo, chromeMat);
      vertMesh.position.set(0, 8.2 - i * 0.9, -1.6);
      torsoGroup.add(vertMesh);
    }

    // PELVIS / HIP BASE
    const pelvisGeo = new THREE.CylinderGeometry(1.6, 2.4, 1.8, 6);
    const pelvisMesh = new THREE.Mesh(pelvisGeo, chromeMat);
    pelvisMesh.position.set(0, 2.0, 0);
    characterRoot.add(pelvisMesh);

    // NECK & HEAD GROUP (Articulated tracking mouse)
    const headPivot = new THREE.Group();
    headPivot.position.set(0, 10.3, 0);
    torsoGroup.add(headPivot);

    // Neck Piston
    const neckGeo = new THREE.CylinderGeometry(0.7, 0.9, 1.5, 8);
    const neckMesh = new THREE.Mesh(neckGeo, darkCarbonMat);
    neckMesh.position.set(0, 0.6, 0);
    headPivot.add(neckMesh);

    // Head Cranium (90s CGI Faceted Style)
    const craniumGeo = new THREE.CylinderGeometry(1.2, 0.9, 2.2, 8);
    const craniumMesh = new THREE.Mesh(craniumGeo, chromeMat);
    craniumMesh.position.set(0, 2.0, 0);
    craniumMesh.rotation.y = Math.PI / 8;
    headPivot.add(craniumMesh);

    // Jaw / Chin Plate
    const chinGeo = new THREE.ConeGeometry(1.1, 1.3, 5);
    const chinMesh = new THREE.Mesh(chinGeo, specularPlateMat);
    chinMesh.position.set(0, 1.1, 0.5);
    chinMesh.rotation.set(Math.PI, 0, 0);
    headPivot.add(chinMesh);

    // Glowing Horizontal Visor (Iconic 90s Ocular Strip)
    const visorGeo = new THREE.BoxGeometry(1.9, 0.42, 0.8);
    const visorMesh = new THREE.Mesh(visorGeo, glowingVisorMat);
    visorMesh.position.set(0, 2.0, 0.85);
    headPivot.add(visorMesh);

    // Temporal Sensor Nodes (Left & Right Ears)
    const earGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.4, 8);
    const leftEar = new THREE.Mesh(earGeo, darkCarbonMat);
    leftEar.position.set(-1.3, 2.0, 0);
    leftEar.rotation.z = Math.PI / 2;
    headPivot.add(leftEar);

    const rightEar = leftEar.clone();
    rightEar.position.x = 1.3;
    headPivot.add(rightEar);

    // SHOULDERS & ARMS
    // Left Shoulder
    const leftShoulderGroup = new THREE.Group();
    leftShoulderGroup.position.set(-3.6, 9.2, 0);
    torsoGroup.add(leftShoulderGroup);

    const shoulderJointGeo = new THREE.SphereGeometry(1.1, 12, 12);
    const leftShoulderJoint = new THREE.Mesh(shoulderJointGeo, darkCarbonMat);
    leftShoulderGroup.add(leftShoulderJoint);

    const leftPauldronsGeo = new THREE.BoxGeometry(2.0, 1.4, 2.2);
    const leftPauldron = new THREE.Mesh(leftPauldronsGeo, chromeMat);
    leftPauldron.position.set(-0.2, 0.5, 0);
    leftShoulderGroup.add(leftPauldron);

    // Left Upper Arm
    const bicepGeo = new THREE.CylinderGeometry(0.7, 0.6, 3.2, 8);
    const leftBicep = new THREE.Mesh(bicepGeo, specularPlateMat);
    leftBicep.position.set(-0.4, -2.1, 0.2);
    leftBicep.rotation.set(0.1, 0, 0.1);
    leftShoulderGroup.add(leftBicep);

    // Left Forearm
    const leftForearmGroup = new THREE.Group();
    leftForearmGroup.position.set(-0.5, -4.0, 0.3);
    leftShoulderGroup.add(leftForearmGroup);

    const forearmGeo = new THREE.CylinderGeometry(0.65, 0.5, 3.0, 8);
    const leftForearm = new THREE.Mesh(forearmGeo, chromeMat);
    leftForearm.position.set(0.2, -1.3, 0.8);
    leftForearm.rotation.set(-0.35, 0, 0);
    leftForearmGroup.add(leftForearm);

    // Right Shoulder
    const rightShoulderGroup = new THREE.Group();
    rightShoulderGroup.position.set(3.6, 9.2, 0);
    torsoGroup.add(rightShoulderGroup);

    const rightShoulderJoint = new THREE.Mesh(shoulderJointGeo, darkCarbonMat);
    rightShoulderGroup.add(rightShoulderJoint);

    const rightPauldron = new THREE.Mesh(leftPauldronsGeo, chromeMat);
    rightPauldron.position.set(0.2, 0.5, 0);
    rightShoulderGroup.add(rightPauldron);

    // Right Upper Arm
    const rightBicep = new THREE.Mesh(bicepGeo, specularPlateMat);
    rightBicep.position.set(0.4, -2.1, 0.2);
    rightBicep.rotation.set(0.1, 0, -0.1);
    rightShoulderGroup.add(rightBicep);

    // Right Forearm
    const rightForearmGroup = new THREE.Group();
    rightForearmGroup.position.set(0.5, -4.0, 0.3);
    rightShoulderGroup.add(rightForearmGroup);

    const rightForearm = new THREE.Mesh(forearmGeo, chromeMat);
    rightForearm.position.set(-0.2, -1.3, 0.8);
    rightForearm.rotation.set(-0.35, 0, 0);
    rightForearmGroup.add(rightForearm);

    // 5. FLOATING 90s HOLOGRAPHIC TELEMETRY RINGS
    const ringGroup = new THREE.Group();
    torsoGroup.add(ringGroup);

    const ring1Geo = new THREE.TorusGeometry(4.8, 0.04, 8, 36);
    const ring1 = new THREE.Mesh(ring1Geo, wireRingMat);
    ring1.rotation.x = Math.PI / 2.3;
    ringGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(3.6, 0.03, 6, 32);
    const ring2 = new THREE.Mesh(ring2Geo, wireRingMat);
    ring2.rotation.x = -Math.PI / 3;
    ringGroup.add(ring2);

    const haloRingGeo = new THREE.TorusGeometry(2.1, 0.03, 6, 28);
    const haloRing = new THREE.Mesh(haloRingGeo, wireRingMat);
    haloRing.position.set(0, 13.0, 0);
    haloRing.rotation.x = Math.PI / 2;
    torsoGroup.add(haloRing);

    // 6. 1990s RETRO CYBERSPACE WIREFRAME GROUND
    const gridHelper = new THREE.GridHelper(120, 48, 0x666666, 0x222222);
    gridHelper.position.y = -6.5;
    scene.add(gridHelper);

    // 7. AMBIENT MONOCHROME BINARY DUST PARTICLES
    const particleCount = 280;
    const pGeometry = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const pSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 80;
      pPositions[i * 3 + 1] = Math.random() * 40 - 10;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      pSpeeds[i] = 0.04 + Math.random() * 0.08;
    }

    pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));

    // Sharp square retro particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext('2d');
    if (pCtx) {
      pCtx.fillStyle = '#ffffff';
      pCtx.fillRect(2, 2, 12, 12);
    }
    const pTex = new THREE.CanvasTexture(pCanvas);
    pTex.magFilter = THREE.NearestFilter;

    const pMaterial = new THREE.PointsMaterial({
      size: 0.65,
      map: pTex,
      transparent: true,
      opacity: 0.7,
      color: 0xffffff
    });
    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);

    // 8. Event Handlers (Mouse tracking for head & torso)
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      const mobile = w < 1024;
      camera.position.x = mobile ? 0 : 7;
      characterRoot.position.x = mobile ? 0 : 8;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // 9. Render Loop with Smooth Kinematics & Breathing
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, mouseRef.current.targetX, 0.06);
      mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, mouseRef.current.targetY, 0.06);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Subtle mechanical breathing oscillation
      const breathing = Math.sin(elapsedTime * 1.6) * 0.12;
      torsoGroup.position.y = breathing;

      // Head tracks mouse with realistic limits
      headPivot.rotation.y = THREE.MathUtils.clamp(mx * 0.75, -0.65, 0.65);
      headPivot.rotation.x = THREE.MathUtils.clamp(-my * 0.5, -0.4, 0.35);

      // Torso subtly turns with mouse
      torsoGroup.rotation.y = THREE.MathUtils.clamp(mx * 0.25, -0.25, 0.25);
      torsoGroup.rotation.x = THREE.MathUtils.clamp(-my * 0.15, -0.15, 0.15);

      // Rotating Holographic Coordinate Rings
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.y = -elapsedTime * 0.45;
      haloRing.rotation.z = elapsedTime * 0.2;

      // Pulse reactor core intensity
      const corePulse = 2.0 + Math.sin(elapsedTime * 4.0) * 0.8;
      corePointLight.intensity = corePulse;

      // Cyberspace Grid motion (retro wireframe terrain stream)
      gridHelper.position.z = (elapsedTime * 2.5) % 2.5;

      // Ascending data particles
      const posArray = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3 + 1] += pSpeeds[i];
        if (posArray[i * 3 + 1] > 30) {
          posArray[i * 3 + 1] = -10;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [wireframeMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070707] select-none">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-auto" />

      {/* Retro 90s CRT Vignette & Contrast Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0, 0, 0, 0.82) 100%),
            linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, transparent 40%, rgba(0, 0, 0, 0.4) 100%)
          `
        }}
      />

    </div>
  );
};
