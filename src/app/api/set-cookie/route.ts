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

        cookies().set(key, JSON.stringify(value));
        console.log("set cookie", key, value);

        return new Response("success", {
            status: 200
        });
    } catch (error) {
        console.log(error);
        if (error instanceof z.ZodError) {
            return new Response(error.message ?? "error", { status: 400 });
        }
        return new Response("error", {
            status: 500
        });
    }
}
