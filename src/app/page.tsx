import {redirect} from 'next/navigation';

export default function RootRedirect() {
  // Server-side redirect to default locale
  redirect('/en');
}
