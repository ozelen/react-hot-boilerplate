import {dispatch} from './Dispatcher';

const item = {firstName: 'Vasya', lastName: 'Pupkin', phone: '+380234732123'}

setTimeout(() => {
  console.log('DISPATCHING');
 dispatch({type: 'addContact', data: item});
}, 0);