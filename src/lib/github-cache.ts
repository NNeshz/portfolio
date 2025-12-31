import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), '.cache');
const CACHE_FILE = path.join(CACHE_DIR, 'github-contributions.json');
const CACHE_DURATION = 1000 * 60 * 60; // 1 hora

interface CacheData<T> {
  timestamp: number;
  value: T;
}

export async function getCachedData<T>(
  fetcher: () => Promise<T>
): Promise<T | null> {
  try {
    const cached = await fs.readFile(CACHE_FILE, 'utf-8');
    const data: CacheData<T> = JSON.parse(cached);
    
    if (data.timestamp && Date.now() - data.timestamp < CACHE_DURATION) {
      console.log('✓ Usando caché de GitHub (válido por', Math.round((CACHE_DURATION - (Date.now() - data.timestamp)) / 1000 / 60), 'minutos más)');
      return data.value;
    } else {
      console.log('⟳ Caché expirado, obteniendo datos frescos...');
    }
  } catch (error) {
    console.log('⟳ No hay caché disponible, obteniendo datos...');
  }

  const freshData = await fetcher();
  
  if (freshData) {
    try {
      await fs.mkdir(CACHE_DIR, { recursive: true });
      await fs.writeFile(
        CACHE_FILE,
        JSON.stringify({ timestamp: Date.now(), value: freshData }, null, 2)
      );
      console.log('✓ Caché de GitHub guardado exitosamente');
    } catch (error) {
      console.error('✗ Error guardando caché:', error);
    }
  }

  return freshData;
}