import { Route } from './components/Route.jsx'
import { Router } from './components/Router'
import { Suspense, lazy } from 'react'
// import AboutPage from './pages/About'
// import HomePage from './pages/Home'
// import SearchPage from './pages/Search'
// import Page404 from './pages/404'

const LazyAboutPage = lazy(() => import('./pages/About.jsx'))
const LazyHomePage = lazy(() => import('./pages/Home.jsx'))
const LazySearchPage = lazy(() => import('./pages/Search.jsx'))
const LazyPage404 = lazy(() => import('./pages/404.jsx'))

const ROUTES = [
  {
    path: '/',
    Component: LazyHomePage,
  },
  {
    path: '/:lang/about',
    Component: LazyAboutPage,
  },
  // {
  //   path: '/search/:query',
  //   Component: LazySearchPage,
  // },
]

export function App() {
  return (
    <main>
      <Suspense>
        <Router routes={ROUTES} defaultComponent={LazyPage404}>
          {/* <Route path='/' Component={LazyHomePage} /> */}
          <Route path='/about' Component={LazyAboutPage} />
          <Route path='/search:/query' Component={LazySearchPage} />
        </Router>
      </Suspense>
    </main>
  )
}
