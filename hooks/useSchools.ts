import { useEffect, useState } from 'react';

export function useSchools() {
  const [schools, setSchools] = useState<string[]>([]);

  useEffect(() => {
    setSchools([
      'Colegio Andino',
      'Colegio La Colina',
      'Colegio Nogales',
      'Colegio Vermont',
      'Colegio Marymount',
      'Colegio Anglo',
      'Colegio Tandem',
      'Colegio Helvetia',
      'Institut le Rosey',
      'Home School',
      'Gimnasio Nueva Modelia',
      'Colegio El Hontanar',
      'Gimnasio Moderno',
      'Gimnasio La Montaña',
      'Colegio English',
      'Gimnasio Campestre',
      'Colegio Massey Vanier',
      'Colegio Nueva Granada',
      'Colegio Militar Antonio Nariño',
      'Buckingham School',
      'Colegio Tilata',
      'Gimnasio Femenino',
      'Colegio Hacienda Los Alcaparros',
      'Colegio Santa Francisca Romana',
      'Colegio Clermont',
      'Colegio Cristobal Colón',
      'Americano de Bogota',
      'Instituto Tecnologico De Occidente',
      'Colegio San Pedro Claver',
      'Colegio Reuven Feuerstein',
      'Colegio Panamericano',
      'Himalaya School',
      'Otro',
    ]);
  }, []);

  return { schools };
}
