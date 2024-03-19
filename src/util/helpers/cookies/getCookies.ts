"use server";

import { cookies } from "next/headers";

export async function getCookies<ValueType>(
    key: string,
    defaultValue: ValueType
): Promise<ValueType> {
    const cookieStore = cookies();
    const cookie = cookieStore.get(key)?.value;
    console.log("cookie get");

    return cookie ? (JSON.parse(cookie) as ValueType) : defaultValue;
}
