render() {
  return (
    <React.Fragment>
      <h1>Hello, Dicoding</h1>
      <p>Today is a great day!</p>
    </React.Fragment>
  )
}

//// singkat :
render() {
  return (
    <>
      <h1>Hello, Dicoding</h1>
      <p>Today is a great day!</p>
    </>
  )
}

/// rendering conditional

render() {
  const authed = isAuthed()
 
  if (authed) {
    return <h1>Welcome back!</h1>
  } else {
    return <h1>Login to see your dashboard</h1>
  }
}

render() {
  return isAuthed()
    ? <h1>Welcome back!</h1>
    : <h1>Login to see your dashboard</h1>
}

render() {
  return (
    <div>
      <Logo />
      {isAuthed() === true
        ? <h1>Welcome back!</h1>
        : <h1>Login to see your dashboard</h1>}
    </div>
  )
}
