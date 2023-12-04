import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import { generateRandomCoordinates } from '../utils/generateRandomCoordinates';


const Stars = () => {
    const ref = useRef<THREE.Points>(null);

    const sphere = generateRandomCoordinates(5000, 1.2);

    useFrame((_, delta) => {
        if (ref.current?.rotation) {
            const currentRotation = ref.current.rotation as THREE.Euler;
            currentRotation.x -= delta / 10;
            currentRotation.y -= delta / 15;
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

const StarsCanvas = () => {
    return (
        <div className='w-full h-auto absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas