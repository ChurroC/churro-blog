"use server";

import { cookies } from "next/headers";

export async function setCookie<ValueType>(key: string, value: ValueType) {
    cookies().set(key, JSON.stringify(value));
    console.log("cookie set", key, value);
}
