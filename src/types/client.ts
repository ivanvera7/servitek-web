export interface Client {
  name: string;
  /** Logotipo en public/. Sin logo se muestra el nombre como marca tipográfica. */
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  /** Clase de altura para equilibrar ópticamente logos de proporción distinta. */
  logoClass?: string;
  /**
   * `mono` (por defecto): silueta blanca. `color`: colores originales, para
   * logos cuyas piezas se fundirían en una silueta única.
   */
  logoTone?: 'mono' | 'color';
}
