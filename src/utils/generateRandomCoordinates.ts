export const generateRandomCoordinates = (count: number, radius: number) => {
  const sphere = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random() * 2 * Math.PI;
    const phi = u * Math.PI;
    const theta = v;

    const destiny = window.innerWidth > 768 ? 0.65 : 0.5

    const randomRadius = radius * (1 + Math.random() * 0.2);

    const x = randomRadius * Math.sin(phi) * Math.cos(theta);
    const y = randomRadius * Math.sin(phi) * Math.sin(theta);
    const z = randomRadius * Math.cos(phi);

    sphere[i * 3] = x * destiny;
    sphere[i * 3 + 1] = y * destiny;
    sphere[i * 3 + 2] = z * destiny;
  }
  return sphere;
};