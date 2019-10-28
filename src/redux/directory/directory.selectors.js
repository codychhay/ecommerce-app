import {createSelector} from 'reselect';

export const directorySelector = state => state.directory;

export const directorySectionsSelector = createSelector(
    [directorySelector],
    (directory) => directory.sections
);

