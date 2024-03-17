import { cookies } from "next/headers";

export function getCookies<ValueType>(
    key: string,
    defaultValue: ValueType
): ValueType {
    const cookieStore = cookies();
    const cookie = cookieStore.get(key)?.value;

    return cookie ? (JSON.parse(cookie) as ValueType) : defaultValue;
}
