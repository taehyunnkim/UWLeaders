import FirebaseContext, {withFirebase} from './context';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config/fbConfig';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  // *** Auth API ***
  signInWithPassword = (password) => this.auth.signInWithEmailAndPassword('uwladmin@uw.edu', password);
  signOut = () => this.auth.signOut();
}

export default Firebase;

export { FirebaseContext, withFirebase };