import { createEffect, createEvent, createStore, sample } from 'effector';
import type { Team } from './types';
import { getTeamsByName } from '../api';

export const loadTeams = createEvent();
export const updateSearch = createEvent<string>();

export const loadTeamsFx = createEffect((query: string) => getTeamsByName(query));

export const $teams = createStore<Team[]>([]);
export const $searchField = createStore('');

sample({
  clock: [loadTeams, updateSearch],
  source: $searchField,
  target: loadTeamsFx,
});

$teams.on(loadTeamsFx.doneData, (_, teams) => teams);
$searchField.on(updateSearch, (_, search) => search);
