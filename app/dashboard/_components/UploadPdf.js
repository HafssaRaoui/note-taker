import React from 'react'
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

const UploadPdf = ({children}) => {
  return (
    <div>
            <Dialog>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Upload Pdf File</DialogTitle>
                    <DialogDescription asChild>

                          <div >
                          <h2>Select a file to Upload</h2>

                            <div className=' gap-5 mt-3 rounded-md border '>
                              <input type='file'/>
                              
                  
                            </div>
                            <div className='mt-2'> 
                                <label>File Name *</label>
                                <Input placeholder = "filename"/>
                              </div>

                              <div className='mt-2'>
                                
                              <DialogFooter className="sm:justify-end">
                                  <DialogClose asChild>
                                    <Button type="button" variant="secondary">
                                      Close
                                    </Button>
                                  </DialogClose>
                                  <Button>Upload</Button>
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