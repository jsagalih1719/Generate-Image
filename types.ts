

export enum AspectRatio {
  SQUARE = '1:1',
  LANDSCAPE = '16:9',
  PORTRAIT = '9:16',
}

export interface UploadedImage {
  id: string;
  file: File;
  previewUrl: string;
}

export interface GeneratedImageResult {
  url: string;
  timestamp: number;
}

export enum NavItem {
  HOME = 'Beranda',
  // KREASI GAMBAR
  COMBINE = 'Gabung Foto',
  EDIT = 'Magic Edit',
  FACESWAP = 'Face Swap',
  PREWEDDING = 'Pre+Wedding',
  // STUDIO AFILIASI
  PRODUCT_STUDIO = 'Product Studio',
  MODEL_STUDIO = 'AI Model Studio',
  BANNER = 'Buat Banner',
  // DESAIN & IMAJINASI
  IMAGEN_STUDIO = 'Image 4.0 Studio',
  HOME_DESIGN = 'Desain Rumah',
}


// Added for Text-to-Speech service
export { Modality } from '@google/genai';