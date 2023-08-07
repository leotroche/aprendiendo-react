import { Link } from '../components/Link'

const i18n = {
  en: {
    title: 'AboutPage',
    link: 'Go to HomePage',
  },
  es: {
    title: 'Acerca de la página',
    link: 'Ir a la página de inicio',
  },
}

export function useI18n(lang) {
  return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')

  return (
    <div>
      <div>
        <h1>{i18n.title}</h1>
        <img src='https://placekitten.com/200/286' alt='Gray Cat' />
      </div>
      <div>
        <Link to='/'>{i18n.link}</Link>
      </div>
    </div>
  )
}
