var React = require('react');
var Layout = require('./layout');


var Auth = React.createClass({
  render: function() {
    return (
      <Layout>
        <h1>Welcome, { this.props.currentUser.emailAddress }</h1>
        <hr> </hr>
        // name of next user

        //submit form
        // yes button => post => decision table => next user return true
        //no button => post => decstion table => next user, return false
        // 
        // 

        <p><a href="/log_out">Log Out</a></p>
      </Layout>
    );
  }
})

// var Unauth = React.createClass({
//   render: function() {
//     return (
//       <Layout>
//         <h1>Welcome</h1>
//         <p><a href="/log_in">Log In</a></p>
//         <p>or</p>
//         <p><a href="/sign_up">Sign Up</a></p>
//       </Layout>
//     );
//   }
// })

// var Homepage = React.createClass({
//   render: function() {
//     if(this.props.currentUser) {
//       return <Auth {...this.props} />
//     } else {
//       return <Unauth />
//     }
//   }
// })

module.exports = Auth;
