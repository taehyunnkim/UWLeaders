import React from 'react';
const FirebaseContext = React.createContext(null);

// Higher order component and currying
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)


export default FirebaseContext;