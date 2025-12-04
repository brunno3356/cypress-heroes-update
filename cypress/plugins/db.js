const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createHero() {
  const hero = await prisma.hero.create({
    data: {
      name: 'Test Hero ' + Date.now(),
      power: 100,
      stamina: 100,
      agility: 100,
      avatar: 'default.png',
    },
  });
  return hero;
}

async function deleteHero(id) {
  await prisma.hero.delete({
    where: { id: id },
  });
  return null;
}

module.exports = {
  createHero,
  deleteHero,
};
