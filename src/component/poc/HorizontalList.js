// import React, { Component } from 'react'
// import "../../index.css"
// import ButtonReuse from "../poc/ButtonReuse"

// import { Container, Row, Col } from "react-grid-system";

// class HorizontalList extends Component {

//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div style={{ paddingTop: 20, }}>
//                 <Container>
//                     <p style={{ fontSize: 14, fontWeight: 'bold' }}>
//                         ChapterName1
//                     </p>
//                     <p style={{ fontSize: 12 }}>
//                         Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes,
//                         Description is the pattern of narrative development that aims to make vivid a place, object, character, or group. Description is one of four rhetorical modes,
//                     </p>
//                     <Row>
//                         <Col>
//                             <img style={{ height: 150, width: 230, borderRadius: 20 }}
//                                 src="https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png">
//                             </img>
//                             <div>
//                                 <p2 style={{ fontSize: 12, fontWeight: 'bold' }}>
//                                     Topic Description
//                                 </p2>
//                                 <p style={{ fontSize: 10 }}>
//                                     Description is the pattern of narrative development that
//                                      aims to make vivid a place,Description is the pattern of narrative development that aims to make vivid a place,
//                                 </p>
//                                 <ButtonReuse
//                                  buttonText="View File"
//                                  imgSrc ="data:image/png;base64,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"/>

//                             </div>
//                         </Col>

//                         <Col>
//                             <img style={{ height: 150, width: 230, borderRadius: 20 }}
//                                 src="https://s29843.pcdn.co/blog/wp-content/uploads/sites/2/2019/06/YouTube-Thumbnail-Sizes.png">
//                             </img>
//                             <div>
//                                 <p2 style={{ fontSize: 12, fontWeight: 'bold' }}>
//                                     Topic Description
//                                 </p2>
//                                 <p style={{ fontSize: 10 }}>
//                                     Description is the pattern of narrative development that
//                                      aims to make vivid a place,Description is the pattern of narrative development that aims to make vivid a place,
//                                 </p>
//                                 <ButtonReuse
//                                  buttonText="View File"
//                                  imgSrc ="data:image/png;base64,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"/>

//                             </div>
//                         </Col>
//                     </Row>

//                 </Container>
//             </div>
//         )
//     }
// }

// export default HorizontalList