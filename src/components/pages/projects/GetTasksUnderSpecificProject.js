// import React, {useState, useEffect} from 'react'
// import axios from "axios"

// const GetTasksUnderSpecificProject = ({match}) => {
//     const [response, setResponse] = useState([])
//     const id = match.params.id
//     const authToken = localStorage.getItem('Token')
//     const Fetch =async() => {
//         const {data} = await axios.get(`https://stc-mgmt-portal.herokuapp.com/project/getalltasks?projectId=${id}`, {
//             headers: {
//                'auth-token': authToken
//             }
//         }) 
//         console.log(data)
//         setResponse(data)
//     }
//     useEffect(()=>{
//         Fetch()
//     }, [])
//     return (
//         <div>
//             Henlo: {id}
//         </div>
//     )
// }


// export default GetTasksUnderSpecificProject


import React, {useState, useEffect} from 'react'
import axios from "axios"

const GetTasksUnderSpecificProject = ({match}) => {
    const [response, setResponse] = useState([])
    const id = match.params.id
    const authToken = localStorage.getItem('Token')
    const Fetch =async() => {
        const {data} = await axios.get(`https://stc-mgmt-portal.herokuapp.com/project/getalltasks?projectId=${id}`, {
            headers: {
               'auth-token': authToken
            }
        }) 
        console.log(data)
        setResponse(data)
    }
    useEffect(()=>{
        Fetch()
    }, [])
    return (
        <div>
            Henlo: {id}
        </div>
    )
}

export default GetTasksUnderSpecificProject
