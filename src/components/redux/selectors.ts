import { RootState } from './store'; 

export const getContacts = (state: RootState) => state.contacts;
export const getStatusFilter = (state: RootState) => state.filters.status;
