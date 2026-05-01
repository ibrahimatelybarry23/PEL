import { lazy } from 'react'
import vettoriMd from './vettori.md?raw'
import stringheMd from './stringhe.md?raw'
import sortingMd from './sorting.md?raw'
import ricorsioneMd from './ricorsione.md?raw'
import classiMd from './classi.md?raw'

export const NOTES = [
  { slug: 'vettori',               title: 'Vettori',            icon: '📦', md: vettoriMd },
  { slug: 'stringhe',              title: 'Stringhe',           icon: '🔤', md: stringheMd },
  { slug: 'sorting',               title: 'Sorting',            icon: '↕️', md: sortingMd },
  { slug: 'ricorsione',            title: 'Ricorsione',         icon: '🔁', md: ricorsioneMd },
  { slug: 'classi',                title: 'Classi',             icon: '🧱', md: classiMd },
  { slug: 'linked-list',           title: 'Linked List',        icon: '🔗', component: lazy(() => import('./LinkedList')) },
  { slug: 'double-linked-list',    title: 'Double Linked List', icon: '↔️', component: lazy(() => import('./DoubleLinkedList')) },
  { slug: 'circular-linked-list',  title: 'Liste Circolari',    icon: '🔄', component: lazy(() => import('./CircularLinkedList')) },
  { slug: 'stack',                 title: 'Stack (Pila)',       icon: '🥞', component: lazy(() => import('./Stack')) },
  { slug: 'recursive-linked-list', title: 'Ricorsione Liste',   icon: '🔁', component: lazy(() => import('./RecursiveLinkedList')) },
  { slug: 'queue',                 title: 'Queue (Coda)',       icon: '🚶', component: lazy(() => import('./Queue')) },
  { slug: 'overloading',           title: 'Overloading',        icon: '⚙️', component: lazy(() => import('./Overloading')) },
]