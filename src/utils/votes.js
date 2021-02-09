export  const upVote= ()=>{
    this.setState(currentState=>{
      return {votes: currentState++}
    })
  }
export const downVote = ()=>{
    this.setState(currentState=>{
      return {currentState:{ votes:currentState--}}
    })
  }