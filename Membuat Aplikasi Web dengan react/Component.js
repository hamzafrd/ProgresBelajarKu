function InstagramProfile(/*props*/ { name, username, bio, isVerified }) {
  //const profile = props.profile;
  //const name = profile.name;
  //const username = profile.username;
  // const bio = profile.bio;
  //const isVerified = profile.isVerified;
  return (
    <div className="container">
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>Username: </dt>
        <dd>{username}</dd>
        <dt>Bio: </dt>
        <dd>{bio}</dd>
        <dt>Verified: </dt>
        <dd>{isVerified ? "yes" : "no"}</dd>
      </dl>
    </div>
  );
}

// const profile = {
// name: 'Dicoding Indonesia',
// username: 'dicoding',
// bio: 'Bangun Karirmu Sebagai Developer Profesional',
// isVerified: true
// };

//<InstagramProfile profile={profile} />; // sebisa mungkin, hindari praktik seperti ini
<InstagramProfile
  name="Dicoding Indonesia"
  username="dicoding"
  bio="Bangun Karirmu Sebagai Developer Profesional"
  isVerified
/>;

function SayHello({ name }) {
return <p>Hello, {name}!</p>;
}

<SayHello name="Dicoding" />; // <p> Hello, Dicoding!</p>

function SayHello({ children }) {
return <p>Hello, {children}!</p>;
}

<SayHello>Dicoding</SayHello>; // Hello, Dicoding!
