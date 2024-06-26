/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './../pages/__root'
import { Route as TeamsImport } from './../pages/teams'
import { Route as SearchImport } from './../pages/search'
import { Route as IndexImport } from './../pages/index'
import { Route as SearchIndexImport } from './../pages/search.index'
import { Route as SearchTeamsImport } from './../pages/search.teams'
import { Route as SearchMembersImport } from './../pages/search.members'

// Create/Update Routes

const TeamsRoute = TeamsImport.update({
  path: '/teams',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchIndexRoute = SearchIndexImport.update({
  path: '/',
  getParentRoute: () => SearchRoute,
} as any)

const SearchTeamsRoute = SearchTeamsImport.update({
  path: '/teams',
  getParentRoute: () => SearchRoute,
} as any)

const SearchMembersRoute = SearchMembersImport.update({
  path: '/members',
  getParentRoute: () => SearchRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/teams': {
      preLoaderRoute: typeof TeamsImport
      parentRoute: typeof rootRoute
    }
    '/search/members': {
      preLoaderRoute: typeof SearchMembersImport
      parentRoute: typeof SearchImport
    }
    '/search/teams': {
      preLoaderRoute: typeof SearchTeamsImport
      parentRoute: typeof SearchImport
    }
    '/search/': {
      preLoaderRoute: typeof SearchIndexImport
      parentRoute: typeof SearchImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  SearchRoute.addChildren([
    SearchMembersRoute,
    SearchTeamsRoute,
    SearchIndexRoute,
  ]),
  TeamsRoute,
])

/* prettier-ignore-end */
