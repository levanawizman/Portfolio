import { nanoid } from 'nanoid';

export function generateId(prefix = '') {
  return prefix ? `${prefix}-${nanoid(8)}` : nanoid(8);
}

export function windowId() {
  return generateId('win');
}

export function cardId() {
  return generateId('card');
}

