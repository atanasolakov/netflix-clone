import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import {revalidateEvents} from "swr/_internal";


const useBilboard = () => {
    const { data, error, isLoading } = useSWR('api/random', fetcher,  {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
    return {
        data,
        error,
        isLoading,
    }
}
export default useBilboard;