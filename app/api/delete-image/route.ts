// app/api/delete-image/route.ts (for Next.js app directory)
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { fileUrl } = await req.json() as { fileUrl: string }; // Define the expected shape of the request body

        // Assuming Uploadthing provides a delete API
        const response = await fetch(`https://uploadthing.com/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fileUrl }),
        });

        if (!response.ok) {
            throw new Error('Failed to delete the file');
        }

        return NextResponse.json({ message: 'File deleted successfully' });
    } catch (error: unknown) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
