export const initialCells = [];
const randomOrders = [];

export const getRandomOrder = (randomOrders = []) => {
  const randomOrder = Math.trunc(Math.random() * 16 + 1);

  if (randomOrders.includes(randomOrder)) {
    return getRandomOrder(randomOrders);
  }

  randomOrders.push(randomOrder);

  return randomOrder;
}

for (let i = 0; i <= 15; i++) {
  const randomOrder = getRandomOrder(randomOrders);
  initialCells[i] = {
    index: i,
    order: randomOrder,
    context: i + 1,
    isVisible: true,
  }

  if (i === 15) {
    initialCells[15].isVisible = false;
  }
}
