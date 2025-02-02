import Dongs from "@/components/page/Dongs";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {prefetchHouseApiSearchHouses} from "@/openapi/api/house/house";
import NotFound from "@/app/not-found";

export default async function DongsPage() {


    try {
        const searchHouseQueryClient = new QueryClient();
        await prefetchHouseApiSearchHouses(searchHouseQueryClient, {page: 0, pageSize: 10});
        const searchHouseDehydratedState = dehydrate(searchHouseQueryClient);

        console.log("searchHouseDehydratedState", searchHouseDehydratedState)


        // let searchTabData: PageRsSearchTabsResponse = {
        //     data: [], meta: {
        //         page: 0,
        //         pageSize: 0,
        //         totalCount: 0,
        //         totalPage: 0,
        //         hasPreviousPage: false,
        //         hasNextPage: false
        //     }
        // };
        //
        // searchTabQueries.forEach(query => {
        //     searchTabData = query.state.data as PageRsSearchTabsResponse;
        // });

        return (
            <Dongs/>
        )
    } catch {
        return <NotFound/>;
    }
}
