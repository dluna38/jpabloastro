import { createClient } from '@sanity/client';
import {createImageUrlBuilder} from '@sanity/image-url';
import {getSecret} from 'astro:env/server';

export const sanityClient = createClient({
  projectId: getSecret('SANITY_PROJECT_ID'), // Reemplaza con tu ID de Sanity
  dataset: getSecret('SANITY_DATASET'), // Reemplaza con tu dataset
  apiVersion: '2024-03-01', // Usa la fecha actual para la versión de la API
  useCdn: true, // `false` si quieres datos frescos siempre (SSR)
});

// Helper para generar URLs de imágenes
const builder = createImageUrlBuilder(sanityClient);

export function imageUrlFor(source: any) {
  return builder.image(source);
}