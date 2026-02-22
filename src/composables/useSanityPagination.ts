import { ref } from 'vue';
import type { Ref } from 'vue';
// Auto-imports for Nuxt + Sanity
import { useSanityQuery, useSanity } from '#imports';

/**
 * A reusable composable for Sanity cursor-based pagination with SSR support.
 * 
 * @param query - The Groq query. Must include $lastDate and $lastId parameters for pagination,
 *                and sorting should be done by date DESC and then _id DESC.
 * @param dateField - The name of the date field in your schema (e.g. 'date' or 'fechaPublicacion').
 * @param limit - Number of items to fetch per page.
 */
export async function useSanityPagination<T extends { _id: string;[key: string]: any }>(
    query: string,
    dateField: string,
    limit: number = 6
) {
    const sanity = useSanity();

    // Cursors
    const lastDate = ref<string | null>(null);
    const lastId = ref<string | null>(null);

    // Initial SSR fetch - useSanityQuery must be called in setup synchronously
    const { data, pending } = await useSanityQuery<T[]>(query, {
        lastDate: null,
        lastId: null,
        limit,
    }, { server: true });

    const items = ref<T[]>(data.value || []) as Ref<T[]>;
    const loadingMore = ref(false);
    const hasMore = ref(true);

    const updateCursors = (newItems: T[]) => {
        if (newItems.length < limit) {
            hasMore.value = false;
        } else {
            hasMore.value = true;
            const lastItem = newItems[newItems.length - 1];
            if (lastItem) {
                lastDate.value = lastItem[dateField];
                lastId.value = lastItem._id;
            }
        }
    };

    // Initialize cursors
    if (items.value.length > 0) {
        updateCursors(items.value);
    } else {
        hasMore.value = false;
    }

    const loadMore = async () => {
        if (!hasMore.value || loadingMore.value) return;

        loadingMore.value = true;

        try {
            // Client-side fetch using sanity.fetch to avoid Nuxt context issues
            const newItems = await sanity.fetch<T[]>(query, {
                lastDate: lastDate.value,
                lastId: lastId.value,
                limit,
            });

            if (newItems && newItems.length > 0) {
                items.value = [...items.value, ...newItems];
                updateCursors(newItems);
            } else {
                hasMore.value = false;
            }
        } catch (error) {
            console.error('Error fetching paginated data from Sanity:', error);
        } finally {
            loadingMore.value = false;
        }
    };

    return {
        items,
        pending,
        loadingMore,
        hasMore,
        loadMore,
    };
}
