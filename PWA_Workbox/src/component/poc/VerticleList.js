// import React, { Component } from 'react'
// import HorizontalList from './HorizontalList';

// const customData = require('../poc/data.json');

// class VerticleList extends Component {

//     constructor(props) {
//         super(props)
//     }

//     navigateToGridView(listitem){
//        return(
//            <HorizontalList keydata={listitem}/>
//        )
//     }

//     render() {
//         return (
//             <div style={{ paddingLeft: 20, paddingTop: 20}}>
//                 {customData.courses.map(listitem => (
//                     listitem.chapters.map(chap => (
//                     <div>
//                         <img style={{ height: 150, width: 230,borderRadius:20}}
//                             src={chap.img} 
//                             onClick = {this.navigateToGridView(listitem)}/>
//                         <p1 style={{ fontSize: 13, fontWeight: 'bold' }}>
//                             {chap.name}
//                         </p1> <br />
//                         <p1 style={{ fontSize: 10 }}
//                             max>
//                             {chap.dec}
//                         </p1> <br /> <br />
//                     </div>
//                 ))))}

//             </div>
//         )
//     }
// }

// export default VerticleList