# Mount
* The methods when a component shows up on browser.
  * constructor()
  * getDerivedStateFromProps()
  * render()
    * access to this.props, this.state    
  * componentDidMount()
    * event handler registration
    * setTimeout
    * steInterval
    * network requests
# Update
* The conditions when a component is re-rendered.
  * props is changed
  * state is changed
  * parent component is re-rendered
  * this.forceUpdate() is called
* The methods for update
  * getDerivedStateFromProps()
  * shouldComponentUpdate() - This determines whether go or no-go.
    * access to this.props, this.state, nextProps, nextState
  * render() - This can be directly triggered by forceUpdate()
  * getSnapshotBeforeUpdate()
    * Use this to remember scroll bar position for redrawing later
  * [DOM changes show up on browser at this moment]
  * componentDidUpdate()
# Unmount
* The method for unmount
  * componentWillUnmount()
# Etc
* componentDidCatch()
  * Use this to show message for any uncaught error.