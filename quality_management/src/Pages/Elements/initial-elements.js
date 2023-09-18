// Function to calculate the positions in a circle
function calculateCirclePositions(centerX, centerY, radius, nodeCount) {
  const positions = [];
  const angleIncrement = (2 * Math.PI) / nodeCount;

  for (let i = 0; i < nodeCount; i++) {
    const angle = i * angleIncrement;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    positions.push({ x, y });
  }

  return positions;
}

const centerX = 400; // X-coordinate of the circle center
const centerY = 250; // Y-coordinate of the circle center
const radius = 200; // Radius of the circle

const nodePositions = calculateCirclePositions(centerX, centerY, radius, 4); // 5 nodes in the circle

export const nodes = [
  {
    id: 'plan',
    type: 'input',
    data: {
      label: 'Plan',
    },
    position: nodePositions[3],
  },
  {
    id: 'do',
    data: {
      label: 'Do',
    },
    position: nodePositions[0],
  },
  {
    id: 'check',
    type: 'output',
    data: {
      label: 'Check',
    },
    position: nodePositions[1],
  },
  {
    id: 'act',
    data: {
      label: 'Act',
    },
    position: nodePositions[2],
  },
];

export const edges = [
  { id: 'e-plan-do', source: 'plan', target: 'do', label: 'Do' },
  { id: 'e-do-check', source: 'do', target: 'check', label: 'Check' },
  { id: 'e-check-act', source: 'act', target: 'check', label: 'Act' },
  { id: 'e-act-plan', source: 'plan', target: 'act', label: 'Plan' },
];