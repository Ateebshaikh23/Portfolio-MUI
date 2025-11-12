// testPrisma.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Fetch all contacts (may be empty if none exist)
    const allContacts = await prisma.contact.findMany();
    console.log('All contacts:', allContacts);

    // Create one test contact
    const newContact = await prisma.contact.create({
        data: {
            name: 'John Doe',
            email: 'john@example.com',
            message: 'Hello from Prisma test!',
        },
    });
    console.log('New contact created:', newContact);

    // Fetch again to confirm insertion
    const updatedContacts = await prisma.contact.findMany();
    console.log('Updated contacts:', updatedContacts);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
