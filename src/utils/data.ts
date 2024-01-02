import Vitalogy from '../assets/vitalogy.png'
import Avocado from '../assets/pearl_jam_avocado_album.jpeg'
import Pense from '../assets/pense_album.jpeg'
import KendrickLamar from '../assets/kendrick.jpeg'
import PontoCego from '../assets/ponto_cego.png'
import LedZeppelin from '../assets/led_zeppelin_artist.jpeg'
import Daily1 from '../assets/daily_mix_1.png'
import Daily2 from '../assets/daily_mix_2.png'
import Daily3 from '../assets/daily_mix_3.png'
import Daily4 from '../assets/daily_mix_4.png'
import Daily5 from '../assets/daily_mix_5.png'

export type DataProps = {
  id: number
  title: string
  subtitle: string
  creator: string
  image: string
  type: string
}

export const data: DataProps[] = [
  {
    id: 1,
    title: 'Pearl Jam',
    subtitle: '',
    creator: '',
    image: Vitalogy,
    type: 'Artist',
  },
  {
    id: 2,
    title: 'Pearl Jam',
    subtitle: 'Avocado',
    creator: 'Guilherme G.',
    image: Avocado,
    type: 'Album',
  },
  {
    id: 3,
    title: 'Pense',
    subtitle: 'Realidade, Vida e Fe',
    creator: 'Girardi',
    image: Pense,
    type: 'Album',
  },
  {
    id: 4,
    title: 'Led Zeppelin',
    subtitle: '',
    creator: '',
    image: LedZeppelin,
    type: 'Artist',
  },
  {
    id: 5,
    title: 'Kendrick Lamar',
    subtitle: '',
    creator: '',
    image: KendrickLamar,
    type: 'Artist',
  },
  {
    id: 6,
    title: 'Dead Fish',
    subtitle: 'Ponto Cego',
    creator: 'Gira',
    image: PontoCego,
    type: 'Album',
  },
  {
    id: 7,
    title: 'Daily Mix 1',
    subtitle: '',
    creator: '',
    image: Daily1,
    type: 'Artist',
  },
  {
    id: 8,
    title: 'Daily Mix 2',
    subtitle: '',
    creator: '',
    image: Daily2,
    type: 'Artist',
  },
  {
    id: 9,
    title: 'Daily Mix 3',
    subtitle: '',
    creator: '',
    image: Daily3,
    type: 'Artist',
  },
  {
    id: 10,
    title: 'Daily Mix 4',
    subtitle: '',
    creator: '',
    image: Daily4,
    type: 'Artist',
  },
  {
    id: 11,
    title: 'Daily Mix 5',
    subtitle: '',
    creator: '',
    image: Daily5,
    type: 'Artist',
  },
]
