import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            person: 0
        }
    }
    
    // deletePerson(id){
    //     console.log(this.props.data,id)
    //     let found = this.props.data.filter(person=>{
    //         return person.id === id
    //     })
    //     // console.log(id)
    //     // let foundPerson = this.props.data.findIndex(person=>{
    //     //     return person.id == id
    //     // })
    //     if(found.length){
    //         console.log(found)
    //         this.props.data.splice(found,1)
    //     }
    //     console.log(this.props.data)
    // }

    // // componentDidUpdate(prevProps,prevState){
    // //     if(prevProps.data.length !== this.props.data.length){
    // //         window.reload()
    // //     }
    // // }

    // editPerson(){

    // }

    // addNewPerson(){

    // }

    render() {
        const { data } = this.props
        // console.log(data)

        let mappedPerson = data.map(person => {
            let mappedMovie = person.favoriteMovies.map((movie, i) => {
                return (
                    <ol key={i + 1} style={{margin:10}}>
                        <li value={i + 1} >{movie}</li>
                    </ol>
                )
            })
            return (
                <div key={person.id} style={{ background: 'white', height: '90%' , display:'flex' ,flexDirection:'column',justifyContent:'center'}}>
                    <div style={{display:'flex',justifyContent:'flex-end',height:'10%',alignItems:'center'}}>
                        <h1 style={{marginRight:50}}>{person.id}/{this.props.data.length}</h1>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',minHeight:'80%',marginLeft:100,overflowY:'auto'}}>
                        <div>
                            <h1 style={{margin: 0 ,letterSpacing:'0.03em',fontWeight:700,textDecoration:'underline',textDecorationColor:'#34A5DA',textUnderlinePosition:'under'}}>{person.name.first} {person.name.last}</h1>
                        </div>
                        <div style={{fontSize:24}}>
                            <h3 style={{ margin: 0 }}>From:  
                                <span style={{fontWeight:200}}> {person.city}, {person.country}</span>
                            </h3>
                            <h3 style={{ margin: 0 }}>Job Title: 
                                <span style={{fontWeight:200}}> {person.title}</span>
                            </h3>
                            <h3 style={{ margin: 0}}>Employer: 
                                <span style={{fontWeight:200}}> {person.employer}</span>
                            </h3>
                        </div>
                        <div style={{fontSize:24}}>
                            <h3 style={{margin:0}}>Favorite Movies:</h3>
                            {mappedMovie}
                        </div>
                    </div>
                    {/* <button style={{width:'100px',borderRadius:'16px',height:'40px',fontSize:24,color:'white',background:'#34A5DA',fontWeight:700,border:'none',outline:'none'}}>Edit</button> */}
                            {/* <button style={{width:'120px',borderRadius:'16px',height:'40px',fontSize:24,color:'white',background:'#34A5DA',fontWeight:700,border:'none',outline:'none'}} onClick={()=>this.deletePerson(person.id)}>Delete</button> */}
                </div>
            )
        })

        // mappedPerson = mappedPerson[this.state.person]

        return (
            <div style={{ background: '#222222', height: 'calc(100vh - 100px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap:'wrap' }}>
                <div style={{ width: '80vw', height: '65%'}}>
                    {mappedPerson[this.state.person]}
                    <div style={{ background: '#222222', position: 'relative',display:'flex',alignItems:'center',marginTop:40 ,flexWrap:'wrap'}}>
                        {this.state.person > 0 && <button style={{ height: '50px', fontSize: 24, color: 'white', background: 'transparent', outline: 'none', border: 'none', position: 'absolute' }} onClick={() => this.setState({ person: this.state.person - 1 })}>
                            <i className="fas fa-chevron-left" style={{marginRight:15}}/>    
                            Previous
                        </button>}
                        <div style={{position:'absolute',left:'calc(50% - 200px)', width:'400px',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                            <button style={{width:'100px',borderRadius:'16px',height:'40px',fontSize:24,color:'white',background:'#34A5DA',fontWeight:700,border:'none',outline:'none'}}>Edit</button>
                            <button style={{width:'120px',borderRadius:'16px',height:'40px',fontSize:24,color:'white',background:'#34A5DA',fontWeight:700,border:'none',outline:'none'}}>Delete</button>
                            <button style={{width:'100px',borderRadius:'16px',height:'40px',fontSize:24,color:'white',background:'#34A5DA',fontWeight:700,border:'none',outline:'none'}}>New</button>
                        </div>
                        {this.state.person < 24 && <button style={{ height: '50px', fontSize: 24, color: 'white', background: 'transparent', outline: 'none', border: 'none', position: 'absolute', right: 0 }} onClick={() => this.setState({ person: this.state.person + 1 })}>
                            Next
                            <i className="fas fa-chevron-right" style={{marginLeft:15}}/>
                        </button>}
                    </div>
                </div>
            </div>
        )
    }
}