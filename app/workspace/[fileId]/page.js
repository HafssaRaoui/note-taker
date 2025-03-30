
'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import WorkspaceHeader from '../_components/WorkspaceHeader'
import PdfViewer from '../_components/PdfViewer'
import {useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

const Workspace = () => {

    const {fileId} = useParams()
    const fileInfo = useQuery(api.pdfStorage.GetFileRecord,{fileId : fileId})

    useEffect(() =>{
        console.log(fileInfo)

    },[fileInfo])
    
  return (
    <div>
        <WorkspaceHeader/>

        <div className='grid grid-cols-2 gap-5'>
            <div >
                {/* Text editor */}
            </div>
            <div>
                {/* pdf viewer */}
                <PdfViewer fileUrl={fileInfo?.fileUrl}/>

            </div>
        </div>
    </div>
  )
}

export default Workspace