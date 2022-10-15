/* eslint-disable no-bitwise */
export function createUuid() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (char === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function createUniqId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
