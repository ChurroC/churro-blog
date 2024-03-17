import { cookies } from "next/headers";

export async function POST(req: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { key, value } = await req.json();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    cookies().set(key, JSON.stringify(value));
    console.log("cookie set", key, value);

    return Response.json({ message: "Cookie Set" });
}
