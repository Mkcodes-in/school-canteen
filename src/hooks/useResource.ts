import { useState } from "react";

type FetchFn<T> = () => Promise<T[]>;
type CreateFn<T> = (item: Partial<Omit<T, 'id'>>) => Promise<T>;

export function useResource<T>(fetchFn: FetchFn<T>, createFn: CreateFn<T>) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAll = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchFn();
            setData(res);
        } catch {
            setError("Failed to load data");
        } finally {
            setLoading(false);
        }
    };

    const create = async (item: Partial<Omit<T, 'id'>>) => {
        setLoading(true);
        setError(null);
        try {
            const res = await createFn(item);
            setData((prev) => [...prev, res]);
        } catch {
            setError("Failed to add data");
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, fetchAll, create };
}
