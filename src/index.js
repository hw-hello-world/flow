import _ from 'lodash';

function add(a, b): number {
  return a + b;
}

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Flow', add(2, 3)], ' ');

  return element;
}

if (document.body) {
  document.body.appendChild(component());
}
