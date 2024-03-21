import { stringToJSONSchema } from "@/util/helpers/jsonZodSchema";
import { cookies } from "next/headers";
import { z } from "zod";

const SetCookie = z.object({
    key: z.string({
        invalid_type_error: "Key must be a string"
    }),
    value: z.string({
        invalid_type_error: "Value must be a string"
    })
});

export async function POST(req: Request) {
    try {
        const { key, value } = SetCookie.parse(
            stringToJSONSchema.parse(await req.text())
        );

        cookies().set(key, value);
        console.log("set cookie", key, value);

        return new Response(null, {
            status: 200,
            headers: { "Set-Cookie": `${key}=${value}` }
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(error.message ?? "error", { status: 400 });
        }
        return new Response("There was an error in the server", {
            status: 500
        });
    }
}

// export async function POST(req: Request) {
//     const { key, value } = await req.json();

//     cookies().set(key, value);
//     console.log("set cookie", key, value);

//     return new Response(null, {
//         status: 200,
//         headers: { "Set-Cookie": `${key}=${value}` }
//     });
// }
