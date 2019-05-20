import React from 'react';


const SignIn = () => {
	//
	return(
  // this is a "article" is a card takem from Tachyons The Sign in form is also a Template from Tachyons
	<article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">	
		
  
<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--black ph0 mh0">
      <legend className="pa2 f4 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" for="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/>Remember me</label>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-white grow pointer f6 dib ma3" type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a href="#0" className="f6 link dim black db">Register</a>
     </div>
  </form>
</main>

</article>
			);
}

export default SignIn;