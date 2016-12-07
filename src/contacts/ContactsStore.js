import {ReduceStore} from 'flux/utils';
import ContactRecord from './ContactRecord';
import Immutable from 'immutable';
import Dispatcher from '../Dispatcher';
import {dispatch} from '../Dispatcher';

class ContactStore extends ReduceStore {
  getInitialState() {
     return Immutable.OrderedMap();
  }

  reduce (state, action) {
    switch (action.type) {
      case 'addContact':
        return addItem(state, action.data);

      case 'removeContact':
        return state;

      default:
        return state;
    }
  }
}

const addItem = (state, data) => {
  const instance = new ContactRecord(data);
  return state.set(instance.id, instance);
}

const instance = new ContactStore(Dispatcher);
export default instance;