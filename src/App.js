// import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom'
// import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
// import Post from './components/Post'

function App(){

    // const [feedback,setFeedback] = useState(FeedbackData)

    // const addFeedback = (newFeedback) => {
    //     newFeedback.id=uuidv4
    //     setFeedback([newFeedback, ...feedback])
    // }

    // const deleteFeedback = (id) => {      
    //     if(window.confirm('Are you sure you want to delete?')){
    //         setFeedback(feedback.filte(item) => item.id !== id))
    //     }              
    // }

    return (
        <FeedbackProvider>
        <Router>  
            <Header/>
            <div className="container">
                <Routes>
                    <Route exact path = '/' element = {
                        <>
                        <FeedbackForm />
                        <FeedbackStats />                 
                        <FeedbackList /> 
                        </>
                    }>
                        
                    </Route>
                    <Route path='/about' element={<AboutPage/>}/>  
                    {/* <Route path='/post/:id/:name' element={<Post/>}/>   */}
                    {/* <Route path='/post/*' element={<Post/>} /> */}
                    
                </Routes>     
                <AboutIconLink />   
            </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App