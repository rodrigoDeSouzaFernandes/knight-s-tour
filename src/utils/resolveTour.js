import loop from './loop';
export default function resolveTour(casa) {
  const startIndex =  loop.indexOf(casa.toLowerCase());

  if(startIndex === 0) return loop;

  const start = [], end = [];

  loop.forEach((elem, index) => {
    index < startIndex ? end.push(elem) : start.push(elem);
  })
  return [...start, ...end]
}
