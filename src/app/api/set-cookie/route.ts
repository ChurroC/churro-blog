import { cookies } from "next/headers";

export async function POST(req: Request) {
    const { key, value } = await req.json();

    cookies().set(key, value);
    console.log("set cookie", key, value);

    return new Response(null, {
        status: 200,
        headers: { "Set-Cookie": `${key}=${value}` }
    });
}
