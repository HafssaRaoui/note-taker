import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api'
import { UserButton, useUser } from '@clerk/nextjs'
import { useMutation, useQuery } from 'convex/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'




const WorkspaceHeader = ({ fileName }) => {




  return (
    <div className='p-4 flex justify-between shadow-md'>
      <Image src={"/logo.svg"} alt="logo" width={140} height={100} />
      <h2 className='font-bold'>{fileName}</h2>

      <div className='flex gap-2 items-center'>
        <Button>Save</Button>
        <UserButton />
      </div>
    </div>
  )
}

export default WorkspaceHeader