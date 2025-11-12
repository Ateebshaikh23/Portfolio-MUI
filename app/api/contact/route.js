import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json()

        if (!name || !email || !phone || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
        }

        const newContact = await prisma.contact.create({
            data: { name, email, message }, // phone not stored unless added in schema
        })

        return NextResponse.json(newContact, { status: 201 })
    } catch (error) {
        console.error('Error saving contact:', error)
        return NextResponse.json({ error: 'Failed to save contact' }, { status: 500 })
    }
}
