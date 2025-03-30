'use client'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAction, useMutation } from 'convex/react'
import { Loader2Icon } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

const UploadPdf = ({children}) => {

  const generateUploadUrl = useMutation(api.pdfStorage.generateUploadUrl)
  const addFileEntry = useMutation(api.pdfStorage.addFileEntryToDb)
  const getFileUrl = useMutation(api.pdfStorage.getFileUrl)
  const embeddDocument = useAction(api.myActions.ingest)
  const {user} = useUser()
  const[file,setFile] = useState()
  const[loading,setLoading] = useState(false)
  const [filename,setFilename] = useState()
  const [open,setOpen] = useState(false)

  
  
  const OnFileSelect = (event) => {
    setFile(event.target.files[0])
  }

  const onUpload = async()=>{
    setLoading(true)
    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    console.log("StorageId",storageId);
    const fileId = uuidv4()
    const fileUrl = await getFileUrl({storageId:storageId})
    // Step 3: Save the newly allocated storage id to the database

    const resp = await addFileEntry({
      fileId : fileId,
      storageId : storageId,
      filename:filename??'Untitled File',
      createdBy:user?.primaryEmailAddress?.emailAddress,
      fileUrl : fileUrl
    })

    console.log(resp)
    
    //PDF Call to fetch PDF Process Data
    const apiResponse = await axios.get('/api/pdf-loader?pdfUrl='+fileUrl)
    console.log(apiResponse.data.result)
   

    await embeddDocument({
      splitText : apiResponse.data.result,
      fileId : fileId
    })

    setLoading(false)
    setOpen(false)

    // console.log(embeddedResult)

  }


  return (
    <div>
            <Dialog open ={open}>
                <DialogTrigger asChild>
                    <Button onClick={()=> setOpen(true)} className="w-full mt-10">+ Upload PDF File</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Upload Pdf File</DialogTitle>
                    <DialogDescription asChild>

                          <div >
                          <h2>Select a file to Upload</h2>

                            <div className=' gap-5 mt-3 rounded-md border '>
                              <input type='file' accept='application/pdf'
                              onChange={(event) => OnFileSelect(event)}/>
                              
                  
                            </div>
                            <div className='mt-2'> 
                                <label>File Name *</label>
                                <Input  placeholder = "File Name" onChange={(e) => setFilename(e.target.value)}/>

                              </div>

                              <div className='mt-2'>
                                
                              <DialogFooter className="sm:justify-end">
                                  <DialogClose asChild>
                                    <Button type="button" variant="secondary" >
                                      Close
                                    </Button>
                                  </DialogClose>
                                  <Button onClick={onUpload} disabled={loading}>Upload

                                    {loading?
                                    <Loader2Icon className='animate-spin'/> : ''
                                  }
                                  </Button>
                                </DialogFooter>
                              </div>


                          </div>
                        
                    </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
    </div>
  )
}

export default UploadPdf