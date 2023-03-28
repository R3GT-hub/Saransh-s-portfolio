import React from 'react'
import htmllogo from './htmllogoo.jpg'
import csslogo from './csslogo.jpg'
import tailwindlogo from './tailwindlogo.png'
import reactlogo from './reactlogo.jpg'
import cpplogo from './cpplogo.jpg'
import bootstraplogo from './download.png'
import jslogo from './jslogo.png'
import githublogo from './githublogo.png'






const skills = () => {
  return (
    <div>
        <div>
            
            <div>
                <p>
                   Skills 
                </p>
                <p>These are the technologies I work on</p>
            </div>
            <div>
                <div>
                    <img src={htmllogo} alt="" />
                    <p>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default skills