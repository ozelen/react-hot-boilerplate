import Immutable from 'immutable';

const ContactRecord = Immutable.Record({
  firstName  : undefined,
  lastName   : undefined,
  id         : undefined,
  phone      : undefined
});

export default
class Contact extends ContactRecord {
  constructor (props) {
    const id = (new Date).getTime();
    super({id, ...props});
  }

  get name () {
    return this.firstName + ' ' + this.lastName;
  }
}