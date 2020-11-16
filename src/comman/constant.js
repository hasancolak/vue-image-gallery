export const SECTIONS = [
  { label: 'hot', value: 'hot' },
  { label: 'top', value: 'top' },
  { label: 'user', value: 'user' }
];

export const SORTS = [
  { label: 'viral', value: 'viral' },
  { label: 'top', value: 'top' },
  { label: 'time', value: 'time' }
];

export const WINDOWS = [
  { label: 'day', value: 'day' },
  { label: 'week', value: 'week' },
  { label: 'month', value: 'month' },
  { label: 'year', value: 'year' },
  { label: 'all', value: 'all' }
];

export const SECTIONS_DEFAULT = 'hot';
export const SORTS_DEFAULT = 'viral';
export const WINDOWS_DEFAULT = 'day';

export const GALLERY_LIST = ({ selectedSection, selectedSort, selectedWindow, showViral }) =>
`/${selectedSection}/${selectedSort}/${selectedWindow}/0?showViral=${showViral}`;
export const IMAGE_DETAILS = imageId => `/album/${imageId}`;

export default { SECTIONS, SORTS, WINDOWS, SECTIONS_DEFAULT, SORTS_DEFAULT, WINDOWS_DEFAULT, GALLERY_LIST, IMAGE_DETAILS };
