import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { sanityClient } from './sanity';

export const imageUrlFor = (source: SanityImageSource) => {
    const builder = createImageUrlBuilder(sanityClient);
    return builder.image(source);
};